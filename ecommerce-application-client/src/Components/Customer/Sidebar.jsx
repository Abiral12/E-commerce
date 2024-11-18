const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-600 to-blue-800 text-white z-50 rounded-r-lg shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex flex-col h-full">
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-red-500 focus:outline-none transition"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col mt-6 space-y-4 px-4">
          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded-md bg-blue-700 hover:bg-blue-900 transition-colors shadow-md"
            >
              Category
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded-md bg-blue-700 hover:bg-blue-900 transition-colors shadow-md"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="/addorder"
              className="block py-2 px-4 rounded-md bg-blue-700 hover:bg-blue-900 transition-colors shadow-md"
            >
              Orders
            </a>
          </li>
        </ul>

        {/* Footer Section */}
        <div className="mt-auto p-4 border-t border-blue-500 text-center">
          <p className="text-sm text-gray-200">
            © 2024 Abiral-Panta
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
