import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="pt-24">
        <Hero3D />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} NeuroSpark AI — All rights reserved.</footer>
    </div>
  )
}

export default App
