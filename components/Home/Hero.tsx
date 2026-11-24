
export default function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[650px] max-w-[1100px] items-center gap-8 px-6 py-10 lg:grid-cols-[1fr_1fr] lg:px-0">

        {/* LEFT SIDE */}
        <div className="relative z-20">
          <h1 className="text-[48px] font-bold leading-[1.19] tracking-[-1.5px] text-[#172c5c] sm:text-[60px] lg:text-[68px]">
            We boost
            <br />
            growth for your
            <br />
            startup business
          </h1>

          <p className="mt-9 max-w-[550px] text-[18px] leading-[1.5] text-black">
            Our goal is to tap into the heart of creativity services
            industry as a digital creator. We help businesses grow
            through innovative digital solutions.
          </p>

          {/* BUTTONS */}
          <div className="mt-[72px] flex items-center gap-7">

            <a
              href="#vision"
              className="rounded-xl bg-[#ff6600] px-[34px] py-[15px] text-[16px] font-medium text-white transition hover:bg-orange-700"
            >
              Get Started
            </a>

            <a
              href="#vision"
              className="flex items-center gap-5 text-[16px] font-semibold text-black"
            >
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[4px] border-[#ff6600]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#62646a] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-6 w-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              Learn More
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mx-auto flex min-h-[560px] w-full max-w-[606px] items-center justify-center">

          {/* WHITE CIRCLE */}
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-100 bg-white shadow-[0_0_30px_rgba(0,0,0,0.06)]" />

          {/* MAIN IMAGE */}
          <img
            src="/assets/Image.png"
            alt="Epixelab professional"
            className="relative z-10 w-full max-w-[606px] object-contain"
          />

          {/* TOP REVIEW CARD */}
          <div className="absolute left-0 top-[25px] z-30 flex items-center gap-4 rounded-xl bg-white px-4 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:left-[-10px] lg:left-[-25px]">

            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-black text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-7 w-7"
              >
                <path d="M3 17l6-6 4 4 8-9" />
                <path d="M15 6h6v6" />
              </svg>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-black">
                100% Business Growth
              </h3>
              <div className="mt-1 flex items-center gap-2 text-xs">
                <span className="text-[19px] text-[#ffb52e]">★</span>
                <b>4.9</b>
                <span className="text-gray-400">(1520 Reviews)</span>
              </div>
            </div>

          </div>

          {/* BOTTOM REVIEW CARD */}
          <div className="absolute bottom-[65px] left-[-10px] z-30 rounded-xl bg-white px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:left-[-35px]">

            <h3 className="text-[13px] font-bold text-black">
              1000,000 Happy Clients
            </h3>

            <div className="mt-1 flex items-center gap-2 text-xs">
              <span className="text-[19px] text-[#ffb52e]">★</span>
              <b>4.9</b>
              <span className="text-gray-400">(15k Reviews)</span>
            </div>

          </div>

          {/* BULB DECORATION */}
          <img
            src="/assets/bulb.svg"
            alt=""
            className="absolute left-[-15px] top-[48%] z-20 hidden w-[200px] -translate-y-1/2 lg:block"
          />

          {/* ARROW DECORATION */}
          <img
            src="/assets/arrow.png"
            alt=""
            className="absolute right-[-5px] top-[35px] z-20 hidden w-[150px] lg:block"
          />

        </div>
      </div>
    </section>
  );
}
