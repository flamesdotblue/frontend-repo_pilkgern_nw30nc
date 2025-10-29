import { useState } from 'react'
import { Info, ChevronDown, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const dateOptions = [
  'Last 7 Days',
  'Last 30 Days',
  'Last 90 Days',
  'Year to Date',
  'Custom Range',
]

const mediaFilters = ['All Media', 'High School', 'Undergraduate', 'Graduate', 'International', 'Military']

export default function TopBar() {
  const [dateRange, setDateRange] = useState('Last 30 Days')
  const [media, setMedia] = useState('All Media')
  const [openDate, setOpenDate] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-transparent"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Welcome back, Amar!</h1>
          <p className="text-sm text-muted-foreground">Your analytics snapshot and recent trends</p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Date Range Picker (lightweight dropdown) */}
          <div className="relative">
            <button
              onClick={() => setOpenDate((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm hover:shadow transition"
            >
              <span>{dateRange}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {openDate && (
              <div className="absolute right-0 z-20 mt-2 w-48 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
                {dateOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setDateRange(opt)
                      setOpenDate(false)
                    }}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${
                      dateRange === opt ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Global filter */}
          <div className="relative">
            <button
              onClick={() => setOpenFilter((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm hover:shadow transition"
            >
              <Filter className="h-4 w-4 text-gray-500" />
              <span>{media}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {openFilter && (
              <div className="absolute right-0 z-20 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
                {mediaFilters.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setMedia(opt)
                      setOpenFilter(false)
                    }}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${
                      media === opt ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info button */}
          <button
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:shadow transition"
            aria-label="Info"
            title="About this dashboard"
          >
            <Info className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
