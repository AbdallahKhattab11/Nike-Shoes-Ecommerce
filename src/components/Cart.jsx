import { FaTrash, FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    isCartOpen,
    toggleCart,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-100">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={toggleCart}
      ></div>

      {/* Cart Panel */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-[#1a0b2e] shadow-2xl flex flex-col transform transition-transform duration-300 border-l border-white/10">
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <h2 className="text-2xl font-bold text-primary">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="text-primary/70 hover:text-accent-pink transition-colors p-2"
          >
            <FaXmark size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
                <FaPlus className="text-white/20 text-2xl rotate-45" />
              </div>
              <p className="text-primary/60 text-lg">Your cart is empty.</p>
              <button
                onClick={toggleCart}
                className="text-accent-purple hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/5"
              >
                <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center p-1 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-primary font-medium line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-primary/60">{item.subName}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-accent-pink font-bold">${item.price}</p>

                    <div className="flex items-center gap-3 bg-black/20 rounded-lg px-2 py-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="text-primary hover:text-accent-purple disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="text-sm text-primary font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="text-primary hover:text-accent-purple"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 self-start p-1"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-black/20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary/70">Subtotal</span>
              <span className="text-2xl font-bold text-primary">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <button className="w-full h-12 bg-linear-to-r from-accent-purple to-accent-pink rounded-lg text-white font-semibold tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow mb-3 uppercase">
              Checkout Now
            </button>

            <button
              onClick={clearCart}
              className="w-full py-2 text-sm text-primary/50 hover:text-red-400 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
