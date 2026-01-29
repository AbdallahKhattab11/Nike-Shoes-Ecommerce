const Subscribe = () => {
  return (
    <section className="py-20 px-6 md:px-10 max-w-[1280px] mx-auto">
      <div
        className="w-full rounded-3xl p-10 md:p-20 flex flex-col items-center justify-center text-center gap-8 relative overflow-hidden group"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(2,2,2,0.5), rgba(0,0,0,0.8)), url('/assets/subs/subs.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
          Subscribe For News And Latest Updates
        </h2>

        <form
          className="flex flex-col sm:flex-row w-full max-w-lg gap-4 sm:gap-0 z-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="ex@gmail.com"
            className="w-full p-4 rounded-full sm:rounded-l-full sm:rounded-r-none outline-none border-none text-black px-6"
            required
          />
          <button className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-8 py-4 rounded-full sm:rounded-l-none sm:rounded-r-full font-bold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
