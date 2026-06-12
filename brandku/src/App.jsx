import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleCtaClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      <header className="flex justify-between items-center py-6 px-10 border-b border-gray-100">
        <h1 className="text-xl font-bold text-blue-600">BrandKu</h1>
        <nav className="space-x-6 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">Beranda</a>
          <a href="#" className="hover:text-blue-600 transition">Fitur</a>
          <a href="#" className="hover:text-blue-600 transition">Harga</a>
        </nav>
      </header>
      
      <main className="mx-auto px-4 py-16 text-center max-w-6xl">
        
        <section className="bg-blue-50 py-20 px-4 mb-16 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Solusi Terbaik untuk Bisnismu
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto mb-8 text-base md:text-lg">
            Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
          </p>

          <button 
            onClick={handleCtaClick}
            className={`bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md ${
              counter >= 2 ? 'hidden' : ''
            }`}
          >
            Mulai Gratis
          </button>

          <div id="info_box" className="mt-6 text-gray-700 font-medium min-h-[40px]">
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

        <section>
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Mengapa BrandKu?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left hover:shadow-md transition">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Mudah Digunakan</h3>
              <p className="text-gray-600 text-sm">Tidak perlu keahlian teknis. Setup dalam 5 menit.</p>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left hover:shadow-md transition">
              <div className="text-2xl mb-4">🤖</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Serba Otomatis</h3>
              <p className="text-gray-600 text-sm">Otomatiskan tugas berulang dan fokus pada hal yang penting.</p>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left hover:shadow-md transition">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Laporan Real-time</h3>
              <p className="text-gray-600 text-sm">Pantau performa bisnismu kapan saja dan di mana saja.</p>
            </article>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-16 border-t border-gray-800">
        <p className="text-sm">&copy; 2026 BrandKu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;