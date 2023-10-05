import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/navbar/Navbar';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Add from './pages/Add';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}