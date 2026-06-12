export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left hover:shadow-md transition">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </article>
  );
}