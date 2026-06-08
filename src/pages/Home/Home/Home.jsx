import Banner from '../Banner/Banner';
import Services from '../services/Services';
import OurServicesSection from '../OurServicesSection/OurServicesSection';
import HowItWorks from '../HowItWorks/HowItWorks';
import MerchantBanner from '../MerchantBanner/MerchantBanner';
import TestimonialCarousel from './TestimonialCarousel/TestimonialCarousel';
// import MarqueLogo from '../MarqueLogo/MarqueLogo';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurServicesSection></OurServicesSection> 
            {/* <MarqueLogo></MarqueLogo> */}
            <HowItWorks></HowItWorks>
            <MerchantBanner></MerchantBanner>
            <TestimonialCarousel></TestimonialCarousel>
        </div>
    );
};

export default Home;