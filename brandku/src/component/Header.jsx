import { useState } from "react";

export default function Hero() {
  const [counter, setCounter] = useState(0);

  return (
    <section className="bg-blue-50 py-20 px-4 mb-16 rounded-2xl text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        Solusi Terbaik untuk Bisnismu
      </h1>
      <p className="text-gray-600 max-w-lg mx-auto mb-8 text-base md:text-lg">
        Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
      </p>

      <button 
        onClick={() => setCounter((prev) => prev + 1)}
        className={`bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md ${
          counter >= 2 ? 'hidden' : ''
        }`}
      >
        Mulai Gratis
      </button>

      <div className="mt-6 text-gray-700 font-medium min-h-[40px]">
        {counter === 1 && (
          <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4">
            <p className="text-sm text-gray-600 mb-2 text-left">Silakan masukkan email Anda untuk melanjutkan:</p>
            <input 
              type="email" 
              placeholder="nama@bisnis.com" 
              className="border p-2 rounded w-full text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
            />
          </div>
        )}

        {counter >= 2 && (
          <span className="text-red-500 bg-red-50 px-4 py-2 rounded-full border border-red-100 inline-block">
            Pendaftaran telah ditutup. Terima kasih
          </span>
        )}
      </div>
    </section>
  );
}