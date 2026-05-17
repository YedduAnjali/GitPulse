import { motion } from 'framer-motion'
const StatCard = ({ title, value, icon }) => {
return (
<motion.div
whileHover={{ y: -5 }}
className="card p-5"
>
<div className="flex items-center justify-between mb-4">
<p className="text-slate-400 text-sm">{title}</p>
{icon}
</div>
<h2 className="text-3xl font-bold">{value}</h2>
</motion.div>
)
}
export default StatCard