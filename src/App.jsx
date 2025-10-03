
import HeroSection from "./components/HeroSection.jsx";
import FeatureExplaination from "./components/FeatureExplaination.jsx";
import DemoSection from "./components/DemoSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import {webinarDetails} from "./FeatureArray.js";

const App = () => {
    return (
        <>
            <HeroSection/>
            <div className="grid grid-cols-4 gap-6">
                {webinarDetails.map(webinar => (
                    <FeatureExplaination key={webinar.features} features={webinar.features} highlights={webinar.highlights}/>
                )
                )}
            </div>
            <DemoSection/>
            <TestimonialsSection/>
            <CTASection/>
            <Footer/>


        </>

    );
};
export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
