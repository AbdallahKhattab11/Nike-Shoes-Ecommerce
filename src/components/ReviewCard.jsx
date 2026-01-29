import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent-purple mb-6 p-1">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <h3 className="text-xl font-bold text-accent-purple mb-4 capitalize">
        {review.name}
      </h3>

      <p className="text-primary-light italic mb-6 leading-relaxed">
        "{review.feedback}"
      </p>

      <div className="flex gap-1 text-yellow-400">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
