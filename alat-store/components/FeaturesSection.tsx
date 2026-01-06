import { Truck, ShieldCheck, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-purple-700" />,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your doorstep.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-700" />,
    title: "Quality Products",
    description: "Carefully selected fashion items with premium quality.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-purple-700" />,
    title: "WhatsApp Ordering",
    description: "Chat directly with us and place orders instantly.",
  },
];

export default function FeaturesSection() {
  return (
   <section id="features" className="py-16 bg-gray-500">

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Why Shop With Alat Stores?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2  text-black">
                {feature.title}
              </h3>
              <p className="text-sm text-black">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
