import { FaStar, FaCartPlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-accent-purple/50 transition-colors group relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-60 w-full bg-white/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />

        {/* Quick Add Button Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={() => addToCart(product)}
            className="bg-white text-black p-3 rounded-full hover:bg-accent-purple hover:text-white transition-colors transform translate-y-10 group-hover:translate-y-0 duration-300"
          >
            <FaCartPlus size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          <FaStar />
          <span className="text-white font-medium">{product.rating}</span>
        </div>

        <h3 className="text-lg font-bold text-white uppercase tracking-wide">
          {product.subName}
        </h3>
        <p className="text-primary-light text-sm capitalize">{product.name}</p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-accent-pink">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 text-sm border border-accent-purple text-accent-purple rounded-lg hover:bg-accent-purple hover:text-white transition-all capitalize"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
