import Header from "./component/Header";
import Hero from "./component/Hero";
import Featurecard from "./component/Featurcard"; 

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      
      <main className="mx-auto px-4 py-16 max-w-6xl">
        <Hero />

        <section>
          <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">Mengapa BrandKu?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Featurecard 
              icon="⚡" 
              title="Mudah Digunakan" 
              description="Tidak perlu keahlian teknis. Setup dalam 5 menit." 
            />
            <Featurecard 
              icon="🤖" 
              title="Serba Otomatis" 
              description="Otomatiskan tugas berulang dan fokus pada hal yang penting." 
            />
            <Featurecard 
              icon="📊" 
              title="Laporan Real-time" 
              description="Pantau performa bisnismu kapan saja dan di mana saja." 
            />
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