export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      
      {/* Logo */}
      <div className="font-bold text-xl">
        MyApp
      </div>

      {/* Links */}
      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="/dashboard" className="hover:text-blue-500">Dashboard</a>
        <a href="/about" className="hover:text-blue-500">About</a>
        <a href="/login" className="hover:text-blue-500">Login</a>
      </div>

    </nav>
  );
}