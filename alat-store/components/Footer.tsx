export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">Alat Stores</h3>
          <p className="text-sm text-gray-300">
            Where variety meets quality.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <a
            href="https://chat.whatsapp.com/2349055515211"
            className="inline-block bg-green-500 px-4 py-2 rounded-lg"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>

      <p className="text-center text-sm mt-6 text-gray-300">
        © {new Date().getFullYear()} Pounds Michaels Digitals. All rights reserved.
      </p>
    </footer>
  );
}
