export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px]">
          <div className="rounded-3xl bg-white/80 p-10 backdrop-blur">
            <h2 className="text-3xl font-bold text-gray-900">Got a vision? Let’s build it in 3D.</h2>
            <p className="mt-3 text-gray-600">Tell us about your brand, goals, and timeline. We’ll reply within 24h.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 grid gap-3 sm:grid-cols-2">
              <input required placeholder="Your name" className="col-span-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input required type="email" placeholder="Email" className="col-span-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Company" className="sm:col-span-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea required placeholder="Project brief" rows="4" className="sm:col-span-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="sm:col-span-2 mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow">Send request</button>
            </form>

            <p className="mt-4 text-xs text-gray-500">By submitting you agree to our privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
