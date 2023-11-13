import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import heroData from "../data/heroData";
import { socialMediaIconsData } from "../data/footerData";
import SocialMediaIconsGroup from "../components/SocialMediaIconsGroup";
import GoToTop from "../hooks/GoToTop";
import ContactDetails from "../sections/ContactPage/ContactDetails";
import SendMessage from "../sections/ContactPage/SendMessage";
import FAQs from "../sections/ContactPage/FAQs";
import Cta from "../sections/Cta";

const { contact } = heroData;

const ContactUsPage = () => (
  <MainLayout>
    <>
      <Hero
        heading={contact.heading}
        text={contact.text}
        heroImg={contact.heroImg}
        headingWidth={contact.headingWidth}
        textWidth={contact.textWidth}
      >
        <div className="mt-16">
          <SocialMediaIconsGroup arr={socialMediaIconsData} />
        </div>
      </Hero>
      <ContactDetails />
      <FAQs />
      <SendMessage />
      <Cta />
      <GoToTop />
    </>
  </MainLayout>
)

export default ContactUsPage;