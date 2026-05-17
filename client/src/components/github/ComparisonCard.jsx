const ComparisonCard = ({ currentUser, compareUser }) => {
if (!compareUser) return null
return (
<div className="card p-6 overflow-x-auto">
<h2 className="text-2xl font-bold mb-6">
Profile Comparison
</h2>
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-700">
<th className="py-3">Metric</th>
<th>{currentUser.login}</th>
<th>{compareUser.login}</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-slate-800">

<td className="py-4">Followers</td>
<td>{currentUser.followers}</td>
<td>{compareUser.followers}</td>
</tr>
<tr className="border-b border-slate-800">
<td className="py-4">Repositories</td>
<td>{currentUser.public_repos}</td>
<td>{compareUser.public_repos}</td>
</tr>
<tr>
<td className="py-4">Following</td>
<td>{currentUser.following}</td>
<td>{compareUser.following}</td>
</tr>
</tbody>
</table>
</div>
)
}
export default ComparisonCard
