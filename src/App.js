import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Searchblock from "./components/Searchblock/Searchblock";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations"
import Newsletter from "./components/Newsletter/Newsletter";
import PopularPlaces from './components/PopularPlaces/PopularPlaces'
function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Searchblock />
            <PopularDestinations />
            <Newsletter />
            <PopularPlaces />
        </div>
    );
}

export default App;
