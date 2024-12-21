import { Hero } from "./components/hero/hero";
import { LogoSection } from "./components/logosection/logosection";
import TopSeller from "./components/topsell/topsell";
import DressStyle from "./components/category/category";
import Customer from "./components/customer/customer";
import Footer from "./components/footer/footer"; // Ensure this matches the correct component name
import Topheader from "./components/topheader/topheader"; // Fixed import for Topheader
import Card from "./components/card/card"; // Ensure proper PascalCase if it's a React component
import Navbar from "./components/navbar/navbar";
import NewsLetter from "./components/newsletter/newsletter";




export default function Home() {
  return (
    <div className="max-w-full h-full">
      <Topheader />
      <Navbar />
      <Hero />
      <LogoSection />
      <TopSeller />
      <DressStyle />
      <Customer />
      <NewsLetter /> {/* Ensure correct casing and import */}
      <Footer />
      
    </div>
  );
}

