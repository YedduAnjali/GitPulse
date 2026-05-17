import { Star, GitFork } from 'lucide-react'

const RepoCard = ({ repo }) => {

  return (
    <div className="card p-6 hover:border-indigo-500 hover:-translate-y-1 transition duration-300">

      <div className="flex items-start justify-between gap-3">

        <h2 className="text-xl font-semibold break-words line-clamp-1">
          {repo.name}
        </h2>

        <span className="text-xs bg-indigo-600 px-3 py-1 rounded-full whitespace-nowrap">
          {repo.language || 'Unknown'}
        </span>

      </div>

      <p className="text-slate-400 text-sm leading-7 mt-4 min-h-[72px] line-clamp-3">
        {repo.description || 'No description available'}
      </p>

      <div className="flex items-center gap-6 mt-6 text-sm text-slate-300">

        <div className="flex items-center gap-2">
          <Star size={16} />
          {repo.stargazers_count}
        </div>

        <div className="flex items-center gap-2">
          <GitFork size={16} />
          {repo.forks_count}
        </div>

      </div>

    </div>
  )
}

export default RepoCard