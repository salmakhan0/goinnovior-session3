
const testimonials = [
  {
    image: "/assets/pic-1.png",
    name: "RAYHAN GUJRAN",
    text: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
  },
  {
    image: "/assets/pic-2.png",
    name: "KAYLEY FRAME",
    text: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-minimalistic design for our website",
  },
  {
    image: "/assets/pic-3.png",
    name: "GENE WHITFIELD",
    text: "The most important part of the Startup Framework is the samples",
  },
  {
    image: "/assets/pic-4.png",
    name: "ALLAN KIMS",
    text: "I've built my website with Startup just in one day, and it was ready-to-go.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full min-h-[400px] bg-white py-16 md:py-20">
      <div className="w-full px-5 sm:px-10 lg:px-16 xl:px-24">

        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[5px] text-[#8492aa] mb-3">
            TESTIMONIALS
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#183153]">
            What Clients say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 w-full max-w-[1100px] mx-auto">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 w-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover shrink-0"
              />

              <div className="flex-1">
                <p className="text-sm text-[#183153] leading-6">
                  {item.text}
                </p>

                <p className="text-[10px] tracking-[3px] text-[#8492aa] mt-3">
                  {item.name}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
