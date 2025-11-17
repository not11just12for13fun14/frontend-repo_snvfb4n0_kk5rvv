import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(59,130,246,0.20)_0%,rgba(124,58,237,0.10)_50%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-20">
          <Spline scene="https://prod.spline.design/k1cR3L5fQ9vN2o3s/scene.splinecode" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            3D-first AI Agency websites that convert
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            We craft interactive, immersive experiences using real-time 3D, motion and strong messaging. Launch faster, impress harder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow">
              Get a proposal
            </a>
            <a href="#showcase" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10">
              See our work
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=12" />
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=22" />
              <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=32" />
            </div>
            <p>Trusted by startups and Fortune 500 teams</p>
          </div>
        </div>

        <div className="hidden lg:block relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white/60 backdrop-blur">
          <Spline scene="https://prod.spline.design/oUQtH5w3uL9N5K5s/scene.splinecode" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Scroll</div>
    </section>
  )
}
