import { Search } from 'lucide-react'
const SearchBar = ({
username,
setUsername,
onSearch,
repoSearch,
setRepoSearch,
sortBy,
setSortBy
}) => {
return (
<div className="space-y-5">
<div className="card p-5 flex flex-col lg:flex-row gap-4">
<div className="flex-1 relative">
<Search
className="absolute left-4 top-1/2 -translate-y-1/2 textslate-400"
size={18}
/>
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
placeholder="Search GitHub username"
className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12
pr-4 outline-none focus:border-indigo-500"
/>
</div>
<button
onClick={onSearch}
className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold
hover:bg-indigo-500 transition"
>
Analyze
</button>
</div>
<div className="grid md:grid-cols-2 gap-4">
<input
type="text"
value={repoSearch}
onChange={(e) => setRepoSearch(e.target.value)}
placeholder="Search repositories"
className="rounded-xl border border-slate-700 bg-slate-900 px-4
py-3 outline-none focus:border-indigo-500"
/>
<select
value={sortBy}
onChange={(e) => setSortBy(e.target.value)}
className="rounded-xl border border-slate-700 bg-slate-900 px-4
py-3 outline-none"
>
<option value="stars">Sort by Stars</option>
<option value="forks">Sort by Forks</option>
<option value="updated">Recently Updated</option>
</select>
</div>
</div>
)
}
export default SearchBar
