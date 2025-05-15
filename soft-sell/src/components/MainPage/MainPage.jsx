import HeroSection from "../HeroSection/HeroSection"
import HowItWorks from "../HowItWorks/HowItWorks"
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"
import Testimonials from "../Testimonials/Testimonials"
import ContactForm from "../ContactForm/ContactForm"
const MainPage = (props) => {


return (

<div className="font-sans">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>

)




}

export default MainPage