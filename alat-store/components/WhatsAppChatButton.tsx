import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppChatButton() {
  return (
    <a
      href={whatsappLink("Hello, I'm interested in your products")}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
