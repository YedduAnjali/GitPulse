import { BrainCircuit } from 'lucide-react'

const AIInsights = ({ user, repos }) => {
  const totalStars = repos.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  )

  const topLanguage = Object.entries(
    repos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1
      }
      return acc
    }, {})
  ).sort((a, b) => b[1] - a[1])[0]

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-xl bg-indigo-600">
          <BrainCircuit size={20} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">AI Insights</h2>
          <p className="text-slate-400 text-sm">
            Auto-generated profile analysis
          </p>
        </div>
      </div>

      <div className="space-y-3 text-slate-300 leading-7 text-[17px]">
        <p>
          {user.name || user.login} has built a strong GitHub presence with over{' '}
          <span className="font-bold text-white">{repos.length}</span>
          {' '}repositories.
        </p>

        <p>
          Most used language appears to be{' '}
          <span className="font-bold text-indigo-400">
            {topLanguage?.[0] || 'Unknown'}
          </span>.
        </p>

        <p>
          Total repository stars collected:{' '}
          <span className="font-bold text-yellow-400">
            {totalStars}
          </span>.
        </p>

        <p>
          This profile demonstrates consistent development activity and strong
          open-source engagement.
        </p>
      </div>
    </div>
  )
}

export default AIInsights