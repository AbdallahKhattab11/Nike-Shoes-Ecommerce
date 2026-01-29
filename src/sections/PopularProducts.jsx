import { motion } from "framer-motion";
import { cleanArrivals } from "../constants";
import ProductCard from "../components/ProductCard";

const PopularProducts = () => {
  return (
    <section
      id="new-arrival"
      className="py-20 relative px-6 md:px-10 max-w-[1280px] mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white capitalize mb-2">
            New <span className="text-accent-purple">Arrival</span>
          </h2>
          <p className="text-primary-light text-lg">Our new collection</p>
        </div>
        <button className="btn-primary">See All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cleanArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
