import HomePage from "../pages/home";
import Footer from "../widgets/footer/Footer";
import Header from "../widgets/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./providers/ScrollToTop";

const HomeLayout = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Header />

    <main style={{ flex: 1 }}>
      <HomePage />
    </main>

    <Footer />
  </div>
);

export const BlogApp: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
