
const teamMembers = [
  {
    id: 1,
    name: "Vanessa Laird",
    role: "UI DESIGNER",
    image: "/assets/pic-4.png",
  },
  {
    id: 2,
    name: "Mason Campbell",
    role: "UI DESIGNER",
    image: "/assets/pic-5.png",
  },
  {
    id: 3,
    name: "Irea Evans",
    role: "CLIENT MANAGER",
    image: "/assets/pic-5.png",
  },
];

export default function Team() {
  return (
    <section className="w-full bg-white">

      <div className="w-full px-6 py-12 sm:px-10 lg:px-16 xl:px-24">

        {/* TEAM SECTION */}
        <div className="w-full">

          <div className="text-center">
            <span className="text-[7px] font-semibold tracking-[4px] text-gray-400">
              OUR TEAM
            </span>

            <h2 className="mt-2 text-2xl sm:text-[25px] font-semibold text-[#172c4c]">
              Meet The Team
            </h2>
          </div>

          {/* TEAM CARDS */}
          <div className="mx-auto mt-7 grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden rounded-md border border-gray-200 bg-white"
              >
                <div className="flex min-h-[153px] flex-col items-center justify-center py-6">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[60px] w-[60px] rounded-full object-cover"
                  />

                  <h3 className="mt-3 text-[12px] font-medium text-[#21146a]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[7px] tracking-[1.5px] text-gray-400">
                    {member.role}
                  </p>

                </div>

                {/* SOCIAL ICONS */}
                <div className="grid grid-cols-3 border-t border-gray-200">

                  <a href="#twitter" aria-label="Twitter"
                    className="flex h-[32px] items-center justify-center border-r border-gray-200 text-gray-400 hover:text-orange-500">
                    <span>♥</span>
                  </a>

                  <a href="#facebook" aria-label="Facebook"
                    className="flex h-[32px] items-center justify-center border-r border-gray-200 text-gray-400 hover:text-orange-500">
                    <span>f</span>
                  </a>

                  <a href="#website" aria-label="Website"
                    className="flex h-[32px] items-center justify-center text-gray-400 hover:text-orange-500">
                    <span>◎</span>
                  </a>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* NEWSLETTER SECTION */}
        <div className="mt-16 w-full">

          <div className="text-center">
            <span className="text-[7px] font-semibold tracking-[4px] text-gray-400">
              OUR TEAM
            </span>

            <h2 className="mt-2 text-2xl sm:text-[25px] font-semibold text-[#172c4c]">
              Subscribe Our Newsletter
            </h2>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-[1000px] grid-cols-1 items-center gap-10 md:grid-cols-[250px_1fr] lg:gap-16">

            {/* ENVELOPE */}
            <div className="flex justify-center">
              <svg viewBox="0 0 180 175" className="w-[175px]">
                <defs>
                  <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#f4f3f7" />
                    <stop offset="1" stopColor="#d9d8df" />
                  </linearGradient>
                  <linearGradient id="envelope" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#ff8500" />
                    <stop offset="1" stopColor="#ff3200" />
                  </linearGradient>
                </defs>

                <rect x="38" y="8" width="104" height="125" rx="18" fill="url(#paper)" />

                <g stroke="#e79b95" strokeWidth="4" strokeLinecap="round">
                  <path d="M65 32h34" />
                  <path d="M59 47h55" />
                  <path d="M59 60h55" />
                  <path d="M59 73h55" />
                  <path d="M59 86h35" />
                </g>

                <rect x="20" y="82" width="140" height="82" rx="13" fill="url(#envelope)" />
                <path d="M20 88 90 137l70-49-70 12Z" fill="#ff9b00" />
                <path d="m20 163 49-52 21 14 21-14 49 52Z" fill="#ff4800" />
                <path d="m20 88 51 48-51 27Z" fill="#ff6500" />
                <path d="m160 88-51 48 51 27Z" fill="#ff3900" />
              </svg>
            </div>

            {/* NEWSLETTER FORM */}
            <div>

              <p className="mb-6 text-[11px] leading-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <input
                  type="email"
                  required
                  placeholder="Your E-mail here..."
                  className="h-[42px] w-full rounded-full border border-gray-200 px-8 text-sm shadow-md outline-none focus:border-orange-400"
                />

                <button
                  type="submit"
                  className="h-[30px] w-full rounded-md bg-[#ff6500] text-[10px] font-medium text-white transition hover:bg-orange-600"
                >
                  Subscribe Our Newsletter
                </button>
              </form>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
