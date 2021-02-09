import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Searchblock from "./components/Searchblock/Searchblock";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations"
import Newsletter from "./components/Newsletter/Newsletter";
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
import Videoarea from './components/Videoarea/Videoarea';
import TravelVariation from './components/TravelVariation/TravelVariation';
import Testimonials from './components/Testimonials/Testimonials';
import RecentTrip from "./components/RecentTrip/RecentTrip";
import Footer from "./components/Footer/Footer"
function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Searchblock />
            <PopularDestinations />
            <Newsletter />
            <PopularPlaces />
            <Videoarea />
            <TravelVariation />
            <Testimonials />
            <RecentTrip />
            <Footer />
        </div>
    );
}

export default App;
