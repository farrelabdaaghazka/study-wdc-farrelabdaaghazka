export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-10 border-b border-gray-100">
      <h1 className="text-xl font-bold text-blue-600">BrandKu</h1>
      <nav className="space-x-6 text-gray-600">
        <a href="#" className="hover:text-blue-600 transition">Beranda</a>
        <a href="#" className="hover:text-blue-600 transition">Fitur</a>
        <a href="#" className="hover:text-blue-600 transition">Harga</a>
      </nav>
    </header>
  );
}