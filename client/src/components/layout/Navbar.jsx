import { GitBranch } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-600">
            <GitBranch size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              GitPulse
            </h1>

            <p className="text-sm text-slate-400">
              GitHub Analytics Dashboard
            </p>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar