import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-[-300px] w-[600px] h-[600px] bg-accent-purple/20 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-accent-pink/20 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <img
              src="/assets/about/about-img.png"
              alt="About Nike"
              className="w-full max-w-[500px] object-cover drop-shadow-2xl z-10 relative hover:scale-105 transition-transform duration-500"
            />

            {/* Discount Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 max-w-[200px] z-20"
            >
              <h4 className="font-bold text-white text-lg">
                Get up to 50% OFF
              </h4>
              <p className="text-xs text-primary-light mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-purple font-medium mb-2 uppercase tracking-widest text-sm">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We Provide High <br />
            Quality <span className="text-accent-pink">Shoes</span>
          </h2>
          <p className="text-primary-light text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            commodi nostrum similique corrupti doloremque alias aliquam
            assumenda impedit, sequi optio!
          </p>
          <button className="btn-primary">Read More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
