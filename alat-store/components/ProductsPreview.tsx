import ProductCard from "./ProductCard";

const products = [
  {
    name: "Casual Fashion Sunglasses",
    price: "₦15,000",
    oldPrice: "₦20,000",
    discount: "25% OFF",
    image: "/images/hero.jpg",
    hoverImage: "/images/hero.jpg",
  },
  {
    name: "Women's Wrist Watch",
    price: "₦72,000",
    oldPrice: "₦89,000",
    discount: "20% OFF",
    image: "/images/hero.jpg",
    hoverImage: "/images/hero.jpg",
  },
  {
    name: "Luxury Handbag",
    price: "₦18,500",
    oldPrice: "₦24,000",
    discount: "SALE",
    image: "/images/hero.jpg",
    hoverImage: "/images/hero.jpg",
  },
  {
    name: "Classic Sunglasses",
    price: "₦25,000",
    oldPrice: "₦32,000",
    discount: "HOT",
    image: "/images/hero.jpg",
    hoverImage: "/images/hero.jpg",
  },
  {
    name: "Fragrance Perfume",
    price: "₦20,000",
    oldPrice: "₦34,000",
    discount: "30% OFF",
    image: "/images/hero.jpg",
    hoverImage: "/images/hero.jpg",
  },
  {
    name: "fragrance Perfume",
    price: "₦30,000",
    oldPrice: "₦40,000",
    discount: "BEST DEAL",
    image: "/images/hero.jpg",
    hoverImage: "/images/hero.jpg",
  },
];

export default function ProductsPreview() {
  return (
   <section id="products" className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">
          Hot Deals This Week
        </h2>
        <p className="text-center text-black mb-10">
          Hover to preview • Chat on WhatsApp to order instantly
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

