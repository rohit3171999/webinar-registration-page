
import HeroSection from "./components/HeroSection.jsx";
import FeatureExplaination from "./components/FeatureExplaination.jsx";
import DemoSection from "./components/DemoSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";

const App = () => {
    return (
        <>
        <HeroSection/>
            <FeatureExplaination/>
            <DemoSection/>
            <TestimonialsSection/>
        </>

    );
};
export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
