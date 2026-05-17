import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts'

const ActivityChart = ({ data }) => {
  return (
    <div className="card p-6 h-[420px] overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">
        Repository Activity
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 30 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e293b"
          />

          <XAxis
            dataKey="name"
            interval={0}
            angle={-15}
            textAnchor="end"
            height={50}
            tick={{ fontSize: 11, fill: '#94a3b8' }}
          />

          <YAxis tick={{ fill: '#94a3b8' }} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="activity"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ActivityChart