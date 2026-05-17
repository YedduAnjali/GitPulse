import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'

const ContributionHeatmap = ({ values = [] }) => {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setFullYear(endDate.getFullYear() - 1)

  return (
    <div className="card p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-5">
        Contribution Activity
      </h2>

      <div className="min-w-[900px] scale-90 origin-left">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          showMonthLabels
          gutterSize={3}
          classForValue={(value) => {
            if (!value || !value.count) {
              return 'color-empty'
            }

            if (value.count >= 8) return 'color-scale-4'
            if (value.count >= 5) return 'color-scale-3'
            if (value.count >= 3) return 'color-scale-2'
            return 'color-scale-1'
          }}
        />
      </div>
    </div>
  )
}

export default ContributionHeatmap