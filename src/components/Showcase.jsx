import { motion } from 'framer-motion'

const projects = [
  {
    title: 'VisionOS research platform',
    image: 'https://images.unsplash.com/photo-1659123739225-ebc34dbdab0c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXNpb25PUyUyMHJlc2VhcmNoJTIwcGxhdGZvcm18ZW58MHwwfHx8MTc2MzQyMDA5MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['RAG', '3D', 'Next.js']
  },
  {
    title: 'E‑commerce AI copilot',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    tags: ['Chat', 'Design System']
  },
  {
    title: 'Realtime analytics demo',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Dashboard', 'Streaming']
  }
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Selected work</h2>
          <a href="#contact" className="text-sm font-semibold text-blue-600">Let’s collaborate →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white/60 backdrop-blur"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-md bg-gray-100 px-2 py-1">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
