import Button from "./Button"; 

export default function Hero({ onStart, counter, isClosed }) {
  return (
    <section className="text-center py-20 space-y-6">
      <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-6xl">
        Solusi Terbaik untuk Bisnismu
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Bangun identitas merek digital yang kuat, otomatis, dan terpantau secara real-time bersama BrandKu.
      </p>
      
      <div className="flex justify-center pt-4">
        <Button 
          label="Mulai Gratis" 
          onClick={onStart} 
          hidden={isClosed || counter >= 2} 
        />
      </div>
      
      {isClosed && (
        <p className="text-sm font-bold text-red-500 animate-pulse">
          Pendaftaran ditutup karena kuota penuh.
        </p>
      )}
    </section>
  );
}