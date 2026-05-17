import { motion } from 'framer-motion'

const HeroSection = () => {

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-indigo-600 via-violet-600 to-slate-900 p-8 md:p-14">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >

        <p className="uppercase tracking-[6px] text-sm text-slate-200 mb-6">
          Developer Analytics Platform
        </p>

        <h1 className="text-4xl md:text-6xl font-black leading-[1.1] max-w-5xl">
          Analyze Any GitHub Profile With Beautiful Insights
        </h1>

        <p className="mt-6 text-slate-200 text-lg leading-8 max-w-2xl">
          Visualize repositories, stars, contribution activity,
          programming languages, and AI-powered analytics.
        </p>

      </motion.div>

    </section>
  )
}

export default HeroSection