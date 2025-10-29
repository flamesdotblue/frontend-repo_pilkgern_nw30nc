import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Cell } from 'recharts'

const leftData = [
  { name: 'Completed', value: 6100, fill: '#16A34A' },
  { name: 'Unprocessed', value: 1500, fill: '#A855F7' },
  { name: 'Unreviewed', value: 900, fill: '#EAB308' },
]

const rightData = [
  { name: 'Missing Docs', value: 400, fill: '#A855F7' },
  { name: 'Needs Review', value: 700, fill: '#EAB308' },
  { name: 'Formatting', value: 350, fill: '#60A5FA' },
]

export default function PipelineSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">File progress pipeline</h3>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[560px] h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leftData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                <YAxis tick={{ fill: '#6b7280' }} />
                <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                <Legend />
                <Bar dataKey="value" name="Count" radius={[8, 8, 0, 0]}>
                  {leftData.map((entry, index) => (
                    <Cell key={`cell-left-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Incomplete transcript breakdown</h3>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[560px] h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rightData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                <YAxis tick={{ fill: '#6b7280' }} />
                <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                <Legend />
                <Bar dataKey="value" name="Count" radius={[8, 8, 0, 0]}>
                  {rightData.map((entry, index) => (
                    <Cell key={`cell-right-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
