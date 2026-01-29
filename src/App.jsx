import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import AboutUs from "./sections/AboutUs";
import Collection from "./sections/Collection";
import Testimonials from "./sections/Testimonials";
import Subscribe from "./sections/Subscribe";

const App = () => {
  return (
    <CartProvider>
      <div className="bg-dark-bg min-h-screen font-poppins text-primary selection:bg-accent-purple selection:text-white">
        <Navbar />
        <Cart />

        <main>
          <Hero />
          <PopularProducts />
          <AboutUs />
          <Collection />
          <Testimonials />
          <Subscribe />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
