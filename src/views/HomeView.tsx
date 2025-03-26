import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

type Props = {}

const HomeView = (props: Props) => {
// Home view  
    return (
    <div className='container'>
        <Navbar />
        <HeroSection/>
        <Footer />
    </div>
  )
}

export default HomeView;