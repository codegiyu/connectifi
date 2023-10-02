import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NoPage from "./pages/NoPage";
import TestPage from "./pages/Test";
import PackagesPage from "./pages/Packages";
import ProductsPage from "./pages/ProductsPage";
import ContactUsPage from "./pages/ContactUs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/products-and-services" element={<ProductsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
