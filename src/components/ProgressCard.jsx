import { motion } from 'framer-motion'
import { BarChart as RBarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts'

export default function ProgressCard({ title, value, delta, deltaType = 'positive', subtitle, data = [] }) {
  const isPositive = deltaType === 'positive'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl bg-white shadow-sm border border-gray-100 p-4 md:p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-800">{value.toLocaleString()}</span>
            {delta != null && (
              <span className={`${isPositive ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>
                {isPositive ? '+' : ''}{delta}%
              </span>
            )}
          </div>
        </div>
      </div>
      {subtitle && <p className="mt-1 text-xs text-gray-500">{subtitle}</p>}

      <div className="mt-4 h-14">
        <ResponsiveContainer width="100%" height="100%">
          <RBarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
            <Bar dataKey="v" radius={[4, 4, 0, 0]} fill="rgba(37, 99, 235, 0.6)" />
          </RBarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
