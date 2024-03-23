import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import SingleBlogPage from "./pages/SingleBlogPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/blogs/single-blog/:id" element={<SingleBlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
