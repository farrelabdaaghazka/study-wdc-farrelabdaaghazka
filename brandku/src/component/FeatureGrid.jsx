import FeatureCard from "./FeatureCard";
import { featuresData } from "../data/FeatureData";

export default function FeatureGrid() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
        Mengapa BrandKu?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}