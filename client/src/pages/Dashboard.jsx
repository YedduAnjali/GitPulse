import { useState } from 'react'

import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/hero/HeroSection'

import SearchBar from '../components/ui/SearchBar'
import Loader from '../components/ui/Loader'
import EmptyState from '../components/ui/EmptyState'

import ProfileCard from '../components/github/ProfileCard'
import RepoGrid from '../components/github/RepoGrid'
import AIInsights from '../components/github/AIInsights'
import ContributionHeatmap from '../components/github/ContributionHeatmap'

import LanguageChart from '../components/charts/LanguageChart'
import StarsChart from '../components/charts/StarsChart'
import ActivityChart from '../components/charts/ActivityChart'

import { fetchDashboardData } from '../api/githubApi'
const generateContributionsFromEvents = (events = []) => {
  const eventMap = {}

  // Count GitHub events by date
  events.forEach((event) => {
    const date = event.created_at?.split('T')[0]
    if (!date) return

    // Weight PushEvent more heavily for better visibility
    let increment = 1

    if (event.type === 'PushEvent') increment = 5
    else if (event.type === 'PullRequestEvent') increment = 3
    else if (event.type === 'IssuesEvent') increment = 2

    eventMap[date] = (eventMap[date] || 0) + increment
  })

  // Build last 365 days
  const contributions = []
  const today = new Date()

  for (let i = 364; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)

    const dateString = date.toISOString().split('T')[0]

    contributions.push({
      date: dateString,
      count: eventMap[dateString] || 0,
    })
  }

  return contributions
}

const Dashboard = () => {
  // Search input
  const [username, setUsername] = useState('')

  // Main data
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [contributions, setContributions] = useState([])

  // UI state
  const [loading, setLoading] = useState(false)

  // Repository filters
  const [repoSearch, setRepoSearch] = useState('')
  const [sortBy, setSortBy] = useState('stars')

  // Fetch all GitHub data
  const fetchData = async () => {
    const trimmedUsername = username.trim()

    if (!trimmedUsername) return

    try {
      setLoading(true)

      // Fetch all data in parallel for better performance
     const data = await fetchDashboardData(trimmedUsername)

console.log("FRONTEND DATA:", data)

const dashboardData = data?.data || data || {}

setUser(dashboardData.profile || null)
setRepos(dashboardData.repos || [])
const generatedContributions = generateContributionsFromEvents(
  dashboardData.events || []
)

console.log(
  'Generated contributions:',
  generatedContributions.filter((item) => item.count > 0)
)

setContributions(generatedContributions)
    } catch (error) {
  console.error('Actual error:', error)

  alert(
    error.response?.data?.message ||
    error.message ||
    'Something went wrong'
  )
  setUser(null)
  setRepos([])
  setContributions([])
} finally {
      setLoading(false)
    }
  }

  // Filter and sort repositories
  const filteredRepos = (repos || [])
    .filter((repo) =>
      repo.name.toLowerCase().includes(repoSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'stars') {
        return b.stargazers_count - a.stargazers_count
      }

      if (sortBy === 'forks') {
        return b.forks_count - a.forks_count
      }

      return new Date(b.updated_at) - new Date(a.updated_at)
    })

  // Language distribution data
  const languageData = Object.entries(
  (repos || []).reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1
      }

      return acc
    }, {})
  ).map(([name, value]) => ({
    name,
    value
  }))

  // Top starred repositories
  const starData = (repos || [])
    .slice()
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5)
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count
    }))

  // Repository engagement (using forks instead of watchers)
  const activityData = (repos || [])
    .slice()
    .sort((a, b) => b.forks_count - a.forks_count)
    .slice(0, 8)
    .map((repo) => ({
      name: repo.name,
      activity: repo.forks_count
    }))

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Search Bar */}
        <SearchBar
          username={username}
          setUsername={setUsername}
          onSearch={fetchData}
          repoSearch={repoSearch}
          setRepoSearch={setRepoSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Loader */}
        {loading && <Loader />}

        {/* Empty State */}
        {!loading && !user && <EmptyState />}

        {/* Dashboard Content */}
        {!loading && user && (
          <div className="space-y-8">
            {/* Profile + Analytics */}
            <div className="grid xl:grid-cols-[300px_1fr] gap-6">
              {/* Profile Card */}
              <ProfileCard user={user} />

              {/* Right Section */}
              <div className="space-y-6">
                {/* AI Insights */}
                <AIInsights
                  user={user}
                  repos={repos}
                />

                {/* Charts */}
                <div className="grid xl:grid-cols-2 gap-6 items-stretch">
                  <LanguageChart data={languageData} />
                  <StarsChart data={starData} />
                </div>

                {/* Activity Chart */}
                <ActivityChart data={activityData} />

                {/* Real Contribution Heatmap */}
                <ContributionHeatmap values={contributions} />
              </div>
            </div>

            {/* Repository Section */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h2 className="section-title">
                  Repositories
                </h2>

                <p className="text-slate-400">
                  {filteredRepos.length} repositories
                </p>
              </div>

              <RepoGrid repos={filteredRepos} />
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard