export default function CallToAction() {
  return (
    <section className="bg-purple-700 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Shop With Ease?
        </h2>
        <p className="mb-6 text-purple-100">
          Chat with us on WhatsApp and place your order instantly.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/2349055515211?text=Hello%20I%20want%20to%20order"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Order Now
          </a>

          <a
            href="https://chat.whatsapp.com/9055515211"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>
    </section>
  );
}
