import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";


const HomeView:React.FC = () => {
// Home view  
    return (
      <div className="d-flex flex-column min-vh-100">
          <Navbar />
      <main className="flex-grow-1">
          <HeroSection />
      </main>
       <Footer />
  </div>

  )
}

export default HomeView;