export default function HeroSection({ mobile }) {
  return (
    <div>
      <div className="h-[35rem] w-full p-10 imgnow "> </div>

      <div className={`w-full  text-white content ${!mobile ? "" : "mobile"}`}>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl p-5   ">
          Microsoft Learn Student Ambassadors
        </h1>
        <span className="text-sm sm:text-2xl md:text-4xl font-semibold md:pb-5 pb-0 ">
          Quaid-I-Azam University
        </span>
        <h3 className="text-sm sm:text-lg md:text-xl pt-10">
          Be a force for good-locally and globally
        </h3>
      </div>
    </div>
  );
}
