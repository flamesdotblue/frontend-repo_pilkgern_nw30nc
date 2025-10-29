import { motion } from 'framer-motion'
import TopBar from './components/TopBar'
import SnapshotGrid from './components/SnapshotGrid'
import PipelineSection from './components/PipelineSection'
import InsightsTrends from './components/InsightsTrends'

const transcriptData = {
  uploaded: 9000,
  inProgress: 7500,
  published: 6100,
  unprocessed: 1500,
  unpublished: 1400,
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
        <TopBar />

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <SnapshotGrid transcriptData={transcriptData} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }}>
          <PipelineSection />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}>
          <InsightsTrends />
        </motion.div>
      </div>
    </div>
  )
}
