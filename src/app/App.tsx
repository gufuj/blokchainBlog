import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ArticlePage } from "../pages/articlePage/ArticlePage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { DisclaimerPage } from "../pages/disclaimerPage/DisclaimerPage";
import { PrivacyPage } from "../pages/privacyPage/PrivacyPage";
import { ContactsPage } from "../pages/contactsPage/ContactsPage";
import { MainHome } from "../pages/mainHome/ui/MainHome";

import { MainHeader } from "../widgets/mainHeader/MainHeader";
import { MainFooter } from "../widgets/mainFooter/MainFooter";

import { ScrollToTop } from "./providers/ScrollToTop";

import "../index.css";

// Layout для остальных страниц
const MainLayout = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <MainHeader />

    <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>

    <MainFooter />
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
