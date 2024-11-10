
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { User } from './components/User';
import { Admin } from './components/Admin';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to user route or specify a home component */}
        <Route path="/" element={<Navigate to="/user" replace />} />
        
        {/* Your existing routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />

        {/* Catch all route for 404s */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
          </div>
        } />
      </Routes>

      {/* Optional: Add a navigation menu */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/user" className="hover:text-blue-500">User Dashboard</a>
          </li>
          <li>
            <a href="/admin" className="hover:text-blue-500">Admin Dashboard</a>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default App;