import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-25"
    >
      {/* Background Blurs */}
      <div className="absolute top-[-250px] left-[-400px] w-[800px] h-[800px] bg-accent-purple/40 blur-[200px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 blur-[200px] bg-accent-pink/40 w-[400px] h-[400px] rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow delay-1000"></div>

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-center md:text-left z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight capitalize text-white">
            best in style <br />
            collection <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-pink">
              for you
            </span>
          </h1>
          <p className="mt-6 text-primary-light text-lg md:text-xl text-left max-w-lg leading-relaxed">
            We Craft the best, we want to say the best, but through 70 years of
            experience in the industry.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 rounded-full bg-linear-to-r from-accent-purple to-accent-pink text-white font-medium text-lg shadow-lg hover:shadow-purple-500/30 transition-shadow uppercase tracking-wider"
          >
            Pre-order Now
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[500px]"
          >
            <img
              src="/assets/hero/hero.png"
              alt="Nike Shoe Hero"
              className="w-full h-auto object-contain drop-shadow-2xl rotate-[-15deg] hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-0 md:bottom-10 left-0 md:-left-10 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl max-w-[260px]"
          >
            <h3 className="text-xl font-bold text-white mb-1">
              Get up to 50% OFF
            </h3>
            <p className="text-sm text-primary-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              inventore.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
