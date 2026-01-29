import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-primary-light text-lg font-medium">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white capitalize mt-2">
            What our <span className="text-accent-pink">customer says</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={itemVariants}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
