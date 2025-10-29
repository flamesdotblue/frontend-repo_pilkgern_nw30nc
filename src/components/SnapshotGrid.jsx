import ProgressCard from './ProgressCard'

const mockMini = Array.from({ length: 12 }).map((_, i) => ({ v: Math.round(40 + Math.random() * 60) }))

export default function SnapshotGrid({ transcriptData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <ProgressCard title="On Track" value={transcriptData.uploaded} delta={3} deltaType="positive" data={mockMini} />
      <ProgressCard title="In Progress" value={transcriptData.inProgress} delta={-6} deltaType="negative" data={mockMini} />
      <ProgressCard title="Published" value={transcriptData.published} delta={3} deltaType="positive" data={mockMini} />

      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6">
        <p className="text-sm text-muted-foreground">To Review</p>
        <div className="mt-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-gray-700">Unprocessed</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-gray-800">{transcriptData.unprocessed.toLocaleString()}</span>
              <span className="text-green-600 text-sm font-medium">+3%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-700">Unpublished</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-gray-800">{transcriptData.unpublished.toLocaleString()}</span>
              <span className="text-red-600 text-sm font-medium">-8%</span>
            </div>
          </div>
        </div>
        <div className="mt-4 h-14">
          <div className="h-full w-full rounded-lg bg-gray-50 flex items-end gap-1 p-2">
            {mockMini.map((d, i) => (
              <div key={i} className="bg-purple-400/60 rounded-sm" style={{ height: `${d.v}%`, width: 10 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
