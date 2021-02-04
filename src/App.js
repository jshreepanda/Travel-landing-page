import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Searchblock from "./components/Searchblock/Searchblock";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations"

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Searchblock />
            <PopularDestinations />
        </div>
    );
}

export default App;
