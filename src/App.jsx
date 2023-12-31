import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NoPage from "./pages/NoPage";
import PackagesPage from "./pages/Packages";
import ProductsPage from "./pages/ProductsPage";
import ContactUsPage from "./pages/ContactUs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import CheckoutPage from "./pages/CheckoutPage";
import ScheduleInstallation from "./pages/ScheduleInstallationPage";

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="products-and-services" element={<ProductsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/schedule-installation" element={<ScheduleInstallation />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
