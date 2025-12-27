export default function Contact() {
  return (
    <section
      className="min-h-[700px] bg-cover bg-center flex items-center justify-center py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-xl bg-white">

          {/* LEFT INFO */}
          <div className="p-8 bg-gray-100 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              Get in touch
            </h1>
            <p className="text-lg text-gray-600">
              Fill in the form to start a conversation
            </p>

            {/* ADDRESS */}
            <div className="flex items-center gap-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                className="w-7 h-7 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold">
                Acme Inc, Street, State
              </span>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                className="w-7 h-7 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">
                +44 1234567890
              </span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                className="w-7 h-7 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">
                info@acme.org
              </span>
            </div>
          </div>

          {/* FORM */}
          <form className="p-8 bg-white space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Telephone Number"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full md:w-40 bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
