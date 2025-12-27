export default function About() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Building Modern React Experiences
          </h2>
          <p className="text-gray-600 text-lg">
            We focus on clean architecture, scalable components, and developer-friendly codebases.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
              alt="React development"
              className="rounded-2xl shadow-xl max-w-md md:max-w-full"
            />

            {/* BADGE (safe positioning) */}
            <div className="hidden md:block absolute bottom-4 right-4 bg-orange-600 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium">Trusted by Developers</p>
              <p className="text-2xl font-bold">Worldwide</p>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Passionate Developers, Powerful Solutions
            </h3>

            <p className="text-gray-600 leading-relaxed">
              React empowers developers to create fast, interactive user interfaces using reusable
              components and predictable state management.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our approach focuses on clean code, separation of concerns, and modern best practices
              so you can focus on logic instead of fighting the UI.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-white rounded-xl shadow-sm border">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Reusable Components
                </h4>
                <p className="text-sm text-gray-600">
                  Build once and reuse everywhere with scalable design.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-sm border">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Modern Hooks
                </h4>
                <p className="text-sm text-gray-600">
                  Learn real-world React patterns using hooks.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition">
                Learn More
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
