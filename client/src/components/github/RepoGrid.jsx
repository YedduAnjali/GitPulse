import RepoCard from './RepoCard'
const RepoGrid = ({ repos }) => {
return (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
{repos.map((repo) => (
<RepoCard key={repo.id} repo={repo} />
))}
</div>
)
}
export default RepoGrid
