import { Route, Routes } from "react-router-dom";
import "../styles/app.css";
import Home from "./Home";
import RootLayout from "../layouts/RootLayout";
import Blog from "./Blog";
import Post from "./Blog/post";
import Career from "./Career";

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog/:pageId" element={<Post />} />
      </Routes>
    </RootLayout>
  );
}
