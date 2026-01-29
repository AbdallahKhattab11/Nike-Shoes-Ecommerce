import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const filters = ["all", "men", "women", "sports"];

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section
      id="best-collection"
      className="py-20 px-6 md:px-10 max-w-[1280px] mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
        <div className="text-center md:text-left">
          <p className="text-primary-light text-lg mb-2">Best Collection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white capitalize">
            Our New <span className="text-accent-pink">Collection</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border border-accent-purple capitalize transition-all duration-300 font-medium tracking-wide ${
                activeFilter === filter
                  ? "bg-accent-purple text-white shadow-[0_0_15px_rgba(195,43,251,0.5)]"
                  : "bg-transparent text-accent-purple hover:bg-accent-purple hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Collection;
