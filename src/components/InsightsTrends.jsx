import { useState } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts'
import { ChevronDown } from 'lucide-react'

const gpaData = [
  { name: 'Uni A', avg: 3.4 },
  { name: 'Uni B', avg: 3.1 },
  { name: 'Uni C', avg: 3.6 },
  { name: 'Uni D', avg: 2.9 },
  { name: 'Uni E', avg: 3.2 },
]
const lowGpaData = [
  { name: 'Uni D', avg: 2.9 },
  { name: 'Uni B', avg: 3.1 },
]
const creditTotals = [
  { month: 'Jan', credits: 420 },
  { month: 'Feb', credits: 510 },
  { month: 'Mar', credits: 480 },
  { month: 'Apr', credits: 620 },
  { month: 'May', credits: 570 },
  { month: 'Jun', credits: 610 },
]
const avgCredits = [
  { name: 'Uni A', avg: 18 },
  { name: 'Uni B', avg: 22 },
  { name: 'Uni C', avg: 16 },
  { name: 'Uni D', avg: 20 },
]

const publishedVolume = [
  { m: 'Jan', HighSchool: 300, Undergraduate: 380, Graduate: 180, International: 120, Military: 60 },
  { m: 'Feb', HighSchool: 320, Undergraduate: 400, Graduate: 200, International: 140, Military: 80 },
  { m: 'Mar', HighSchool: 340, Undergraduate: 420, Graduate: 220, International: 160, Military: 90 },
  { m: 'Apr', HighSchool: 360, Undergraduate: 440, Graduate: 240, International: 180, Military: 100 },
]
const transcriptTrends = [
  { m: 'Jan', uploaded: 900, processed: 700, published: 600 },
  { m: 'Feb', uploaded: 1100, processed: 900, published: 700 },
  { m: 'Mar', uploaded: 1000, processed: 950, published: 800 },
  { m: 'Apr', uploaded: 1200, processed: 1000, published: 900 },
]
const retention = [
  { m: 'Jan', retained: 88 },
  { m: 'Feb', retained: 90 },
  { m: 'Mar', retained: 87 },
  { m: 'Apr', retained: 91 },
]

function SectionCard({ title, children, actions }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {actions}
      </div>
      <div className="w-full overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

export default function InsightsTrends() {
  const [range, setRange] = useState('Last 12 Months')
  const [showCount, setShowCount] = useState(true)
  const dd = (
    <div className="flex items-center gap-2">
      <div className="relative">
        <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm">
          {range}
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>
      </div>
      <label className="inline-flex items-center gap-2 text-sm text-gray-600">
        <input type="checkbox" checked={showCount} onChange={() => setShowCount((v) => !v)} className="accent-blue-600" />
        Show count
      </label>
    </div>
  )

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Transcript data insights */}
      <details className="group" open>
        <summary className="cursor-pointer list-none">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Transcript data insights</h2>
            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
          </div>
        </summary>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <SectionCard title="Average GPA by institution">
            <div className="min-w-[560px] h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gpaData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                  <YAxis domain={[0, 4]} tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Bar dataKey="avg" name="GPA" fill="rgba(59, 130, 246, 0.7)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Lowest average GPA">
            <div className="min-w-[560px] h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={lowGpaData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                  <YAxis domain={[0, 4]} tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Bar dataKey="avg" name="GPA" fill="rgba(59, 130, 246, 0.7)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Total transfer credit awarded">
            <div className="min-w-[560px] h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={creditTotals}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Bar dataKey="credits" name="Credits" fill="rgba(139, 92, 246, 0.7)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Average transfer credits per student">
            <div className="min-w-[560px] h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={avgCredits}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Bar dataKey="avg" name="Avg Credits" fill="rgba(139, 92, 246, 0.7)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </div>
      </details>

      {/* Monthly Processing Trends */}
      <details className="group" open>
        <summary className="cursor-pointer list-none">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Monthly Processing Trends</h2>
            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
          </div>
        </summary>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <SectionCard title="Published volume" actions={dd}>
            <div className="min-w-[640px] h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={publishedVolume}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="m" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Legend />
                  <Bar dataKey="HighSchool" stackId="a" fill="rgba(59, 130, 246, 0.7)" />
                  <Bar dataKey="Undergraduate" stackId="a" fill="rgba(14, 165, 233, 0.7)" />
                  <Bar dataKey="Graduate" stackId="a" fill="rgba(20, 184, 166, 0.7)" />
                  <Bar dataKey="International" stackId="a" fill="rgba(99, 102, 241, 0.7)" />
                  <Bar dataKey="Military" stackId="a" fill="rgba(56, 189, 248, 0.7)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Transcript breakdown" actions={dd}>
            <div className="min-w-[640px] h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transcriptTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="m" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Legend />
                  <Line type="monotone" dataKey="uploaded" stroke="#60A5FA" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="processed" stroke="#34D399" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="published" stroke="#3B82F6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="File progress" actions={dd}>
            <div className="min-w-[640px] h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transcriptTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="m" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Legend />
                  <Line type="monotone" dataKey="uploaded" stroke="#2563EB" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="processed" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="published" stroke="#16A34A" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Retention summary" actions={dd}>
            <div className="min-w-[640px] h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={retention}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis dataKey="m" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} domain={[0, 100]} />
                  <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
                  <Bar dataKey="retained" name="Retention %" fill="rgba(99, 102, 241, 0.7)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
        </div>
      </details>
    </div>
  )
}
