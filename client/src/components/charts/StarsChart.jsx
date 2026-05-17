import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts'

const StarsChart = ({ data }) => {
  return (
    <div className="card p-6 h-[420px] overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">
        Top Starred Repositories
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 50 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e293b"
          />

          <XAxis
            dataKey="name"
            angle={-20}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ fontSize: 11, fill: '#94a3b8' }}
          />

          <YAxis tick={{ fill: '#94a3b8' }} />

          <Tooltip />

          <Bar
            dataKey="stars"
            fill="#6366f1"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StarsChart