import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ExtraSection1 from "../ExtraSection1/ExtraSection1";
import Gallery from "../Gallery/Gallery";
import PopularCourses from "../PopularCourses/PopularCourses/PopularCourses";
import PopularInstractors from "../PopularInstractors/PopularInstractors/PopularInstractors";
import PricingPlan from "../PricingPlan/PricingPlan";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <PopularInstractors></PopularInstractors>
            <AboutMe></AboutMe>
            <ExtraSection1></ExtraSection1>
            <Gallery></Gallery>
            <PricingPlan></PricingPlan>
            <Review></Review>
        </div>
    );
};

export default Home;