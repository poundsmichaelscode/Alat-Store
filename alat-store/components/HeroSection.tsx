import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">

      
      <Image
        src="/images/IMG_5991.jpg"  //hero section image
        alt="Shopping at Alat Stores"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-purple-900/80" />

      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Discover Variety.<br />Embrace Style.
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Shop premium fashion items and order instantly via WhatsApp.
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            href="https://wa.me/2349055515211?text=Hello%20I%20want%20to%20order"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Order on WhatsApp
          </a>

          <a
            href="https://alat-luxe-shop.lovable.app/"// replace with website link
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition"
          >
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}
