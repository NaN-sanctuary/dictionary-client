import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/navbar/Navbar';

import Home from './pages/Home';
import Blog from './pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}