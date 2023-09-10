import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Blogs } from "./pages/blogs";
import { Layout } from "./layout/layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
