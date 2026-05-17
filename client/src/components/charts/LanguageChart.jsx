import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from 'recharts'

const COLORS = [
  '#6366f1',
  '#8b5cf6',
  '#06b6d4',
  '#14b8a6',
  '#f97316',
  '#ec4899'
]

const LanguageChart = ({ data }) => {
  const safeData = data.slice(0, 6)

  return (
    <div className="card p-6 h-[420px] overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">
        Language Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={safeData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="42%"
            outerRadius={110}
            innerRadius={40}
          >
            {safeData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              fontSize: '12px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LanguageChart