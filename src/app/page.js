import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";

export default function Home() {
  return (
    <div className="container">
      <div className="box">
        <HomePage />
        <AboutPage />
        <ResumePage />
        <PortfolioPage />
        <ContactPage />
      </div>
    </div>
  );
}
