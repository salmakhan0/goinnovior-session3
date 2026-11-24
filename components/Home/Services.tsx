
export default function Services() {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-24">

      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-20 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[6px] text-gray-500">
            SERVICE
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#172c5c] sm:text-5xl lg:text-[50px]">
            Our Vision &amp; Our Goal
          </h2>

        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* CARD 1 */}
          <div className="flex flex-col items-center rounded-xl bg-white px-8 py-10 text-center shadow-[0_5px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]">

            {/* GRAPHIC DESIGN ICON */}
            <div className="mb-8">
              <svg
                viewBox="0 0 80 80"
                className="h-20 w-20"
                fill="black"
              >
                <rect x="5" y="12" width="68" height="63" rx="18" />
                <path
                  d="M22 51 L36 36 L47 45 L62 26"
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="70" cy="12" r="10" />
              </svg>
            </div>

            <h3 className="mb-7 text-3xl font-semibold text-black">
              Graphic Design
            </h3>

            <p className="max-w-[290px] text-base leading-[1.8] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque dui mi, bibendum eu erat id, ultricies semper
              metus. Nunc dapibus laoreet dolor nec imperdiet.
            </p>


<a
  href="#vision"
  className="mt-9 inline-flex items-center justify-center rounded-xl bg-[#ff6600] px-9 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#e85d00]"
>
  Learn More
</a>


          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center rounded-xl bg-white px-8 py-10 text-center shadow-[0_5px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]">

            {/* VIDEO EDITING ICON */}
            <div className="mb-8">
              <svg
                viewBox="0 0 80 80"
                className="h-20 w-20"
                fill="black"
              >
                <rect x="5" y="15" width="54" height="58" rx="16" />
                <path d="M65 31 Q65 24 72 25 L77 28 L77 61 L72 64 Q65 65 65 58 Z" />
              </svg>
            </div>

            <h3 className="mb-7 text-3xl font-semibold text-black">
              Video Editing
            </h3>

            <p className="max-w-[290px] text-base leading-[1.8] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque dui mi, bibendum eu erat id, ultricies semper
              metus. Nunc dapibus laoreet dolor nec imperdiet.
            </p>


<a
  href="#vision"
  className="mt-9 inline-flex items-center justify-center rounded-xl bg-[#ff6600] px-9 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#e85d00]"
>
  Learn More
</a>


          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center rounded-xl bg-white px-8 py-10 text-center shadow-[0_5px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]">

            {/* DIGITAL MARKETING ICON */}
            <div className="mb-8">
              <svg
                viewBox="0 0 80 80"
                className="h-20 w-20"
                fill="black"
              >
                <rect x="5" y="5" width="70" height="70" rx="19" />
                <rect x="22" y="39" width="7" height="24" rx="3" fill="white" />
                <rect x="39" y="21" width="7" height="42" rx="3" fill="white" />
                <rect x="56" y="32" width="7" height="31" rx="3" fill="white" />
              </svg>
            </div>

            <h3 className="mb-7 text-3xl font-semibold text-black">
              Digital Marketing
            </h3>

            <p className="max-w-[290px] text-base leading-[1.8] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque dui mi, bibendum eu erat id, ultricies semper
              metus. Nunc dapibus laoreet dolor nec imperdiet.
            </p>


<a
  href="#vision"
  className="mt-9 inline-flex items-center justify-center rounded-xl bg-[#ff6600] px-9 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#e85d00]"
>
  Learn More
</a>


          </div>

        </div>


{/* FEATURE SECTION */}
<div className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">

  {/* LEFT CONTENT */}
  <div className="flex min-h-[380px] flex-col items-start justify-between py-5">

    <div>
      <h2 className="max-w-[300px] text-2xl font-semibold leading-[1.35] text-[#1b1464]">
        Many Blocks and Components
      </h2>

      <p className="mt-9 max-w-[320px] text-base leading-[1.65] text-[#9999ad]">
        Startup Framework contains components and complex blocks
        which can easily be integrated into almost any design.
      </p>
    </div>

    <a
      href="#explore"
      className="mt-10 inline-flex min-w-[133px] items-center justify-center rounded-full border-2 border-[#e9e9ed] px-8 py-3 text-base font-medium text-[#1b1464] transition duration-300 hover:border-[#482be7] hover:bg-[#482be7] hover:text-white"
    >
      Explore
    </a>

  </div>

  {/* RIGHT IMAGE */}
  <div className="relative h-[280px] overflow-hidden rounded-xl sm:h-[350px] lg:h-[386px]">

    <img
      src="/assets/video-banner.png"
      alt="Startup Framework Components"
      className="h-full w-full object-cover"
    />

    {/* PLAY BUTTON */}
    <button
      type="button"
      aria-label="Play video"
      className="absolute left-1/2 top-1/2 flex h-[85px] w-[85px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#482be7] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#3619ce]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="ml-1 h-7 w-7"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>

  </div>

</div>


      </div>

    </section>
  );
}
