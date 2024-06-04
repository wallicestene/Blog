import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import SingleBlogPage from "./pages/SingleBlogPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useEffect } from "react";
import { useUserContext } from "./hooks/UserContext";
import AccountPage from "./pages/AccountPage";
import { Toaster } from "sonner";
import UpdateBlogPage from "./pages/UpdateBlogPage";
import NotFound from "./pages/NotFound";
const App = () => {
  const [, dispatch] = useUserContext();
  useEffect(() => {
    const authState = () => {
      const loggedUser = localStorage.getItem("user");
      if (loggedUser) {
        dispatch({
          type: "SET_USER",
          payload: JSON.parse(loggedUser),
        });
      } else
        dispatch({
          type: "LOGOUT_USER",
        });
    };
    authState();
  }, [dispatch]);
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/blogs/single-blog/:id" element={<SingleBlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/myAccount" element={<AccountPage />} />
          <Route path="/myAccount/:subPage" element={<AccountPage />} />
          <Route path="/myAccount/update-blog/:id" element={<UpdateBlogPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
