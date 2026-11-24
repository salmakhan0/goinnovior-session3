
export default function Footer() {
  return (
    <footer className="w-full bg-[#e8e8e8] px-4">

      <div className="mx-auto max-w-[1120px] bg-white px-6 py-10 sm:px-12 lg:px-[104px]">

        {/* TOP FOOTER */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-100 pb-7 md:flex-row">

          {/* LOGO */}
          <a href="/" className="shrink-0 text-[21px] font-normal tracking-tight text-black">
            <span className="text-[#ff6500]">≡pixel</span>lab
          </a>

          {/* COPYRIGHT */}
          <p className="text-center text-[12px] text-[#21146a]">
            © 2020 Epixelab. All rights reserved.
          </p>

          {/* NAVIGATION */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-[12px] text-[#21146a] sm:gap-7">

            <a href="/portfolio" className="transition hover:text-orange-500">
              Portfolio
            </a>

            <a href="/how-it-works" className="transition hover:text-orange-500">
              How it Works
            </a>

            <a href="/pricing" className="transition hover:text-orange-500">
              Pricing
            </a>

            <a href="/about" className="transition hover:text-orange-500">
              About
            </a>

            <a href="/login" className="transition hover:text-orange-500">
              Login
            </a>

          </nav>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="pt-7">

          <p className="text-center text-[12px] leading-6 text-[#a0a2b3] md:text-left">
            Startup Framework contains components and complex blocks which
            can easily be integrated into almost any design.
          </p>

        </div>

      </div>

    </footer>
  );
}
