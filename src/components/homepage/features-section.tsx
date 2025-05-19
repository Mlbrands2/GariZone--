import { imageSources } from "@/config/constants";
import { imgixLoader } from "@/lib/imgix-loader";

export const FeaturesSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🚗 We've Got What You Need!
        </h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          🛑 No Car? No Problem!
        </h3>
        <p className="text-lg text-gray-600">
          Discover our exclusive collection of high-end vehicles —
          <br className="hidden sm:block" />
          unmatched luxury 🚘, lightning speed ⚡, and comfort that thrills 🌟.
        </p>
      </div>

      <div
        className="mt-10 mx-auto max-w-7xl h-[300px] bg-cover bg-no-repeat bg-bottom xl:rounded-t-xl shadow-2xl"
        style={{
          backgroundImage: `url(${imgixLoader({
            src: imageSources.featuresSection,
            width: 1200,
            quality: 100,
          })})`,
        }}
      />

      <div aria-hidden="true" className="relative hidden xl:block">
        <div />
      </div>
    </section>
  );
};
