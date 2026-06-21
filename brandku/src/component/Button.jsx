export default function Button({ label, onClick, className, hidden }) {
  if (hidden) return null;
  return (
    <button 
      onClick={onClick}
      className={`bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md ${className}`}
    >
      {label}
    </button>
  );
}