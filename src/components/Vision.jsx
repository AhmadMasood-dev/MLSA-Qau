import React from "react";

const Vision = () => {
  return (
    <section id="works" class="relative bg-primary py-24 mx-auto">
      <div class="px-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
          Our Vision
          </h2>
          <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-xl">
            Our vision at MLSA is to create a collaborative presence in QAU,
            fostering teamwork students
          </p>
        </div>
        <div class="relative mt-12 lg:mt-20">
          <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              alt=""
              loading="lazy"
              width="1000"
              height="500"
              decoding="async"
              data-nimg="1"
              class="w-full text-transparent"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>
          <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700">1</span>
              </div>
              <h3 class="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                Opportunity to Learn
              </h3>
              {/* <p class="mt-4 text-base text-gray-400 md:text-lg">
                Select template accourding to your requirement
              </p> */}
            </div>
            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700">2</span>
              </div>
              <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                Fostering an Inclusive Community for MLSA
              </h3>
            </div>
            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700">3</span>
              </div>
              <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                Commitment to Produce
              </h3>
            </div>
          </div>
        </div>
      </div>
        </section>
  );
};

export default Vision;
