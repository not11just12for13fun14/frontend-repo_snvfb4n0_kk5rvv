import { Zap, Cpu, Globe, Rocket } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-5 w-5" />, 
    title: 'Lightning-fast',
    desc: 'Built with modern stacks and optimized assets for instant loads.'
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: 'AI-native',
    desc: 'Seamless integrations with chatbots, RAG, and analytics.'
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: '3D & Motion',
    desc: 'Spline scenes, WebGL shaders and smooth micro-interactions.'
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Conversion-first',
    desc: 'Clear positioning, strong CTA, and social proof baked in.'
  },
]

export default function Features() {
  return (
    <section id="solutions" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Outcomes, not just visuals</h2>
            <p className="mt-4 text-gray-600 max-w-xl">We combine strategy, copy, and interactive design to ship sites that look stunning and drive results.</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-gray-200 p-5 bg-white/60 backdrop-blur">
                  <div className="h-10 w-10 grid place-content-center rounded-lg bg-blue-600/10 text-blue-600">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-8 ring-1 ring-black/5">
            <p className="text-sm font-semibold text-blue-600">Our process</p>
            <ol className="mt-4 space-y-4 text-gray-700">
              <li><span className="font-semibold">1. Discovery:</span> align on goals, audience, and scope.</li>
              <li><span className="font-semibold">2. Narrative:</span> sharp positioning and concise copy.</li>
              <li><span className="font-semibold">3. Design:</span> 3D hero, motion system, and components.</li>
              <li><span className="font-semibold">4. Build:</span> production-ready, accessible, responsive.</li>
              <li><span className="font-semibold">5. Launch:</span> analytics, SEO, and performance checks.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
