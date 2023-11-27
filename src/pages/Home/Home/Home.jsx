import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ExtraSection1 from "../ExtraSection1/ExtraSection1";
import Gallery from "../Gallery/Gallery";
import PricingPlan from "../PricingPlan/PricingPlan";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <ExtraSection1></ExtraSection1>
            <PricingPlan></PricingPlan>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;