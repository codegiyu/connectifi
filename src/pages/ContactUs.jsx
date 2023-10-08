import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import heroData from "../data/heroData";
import { socialMediaIconsData } from "../data/footerData";
import SocialMediaIconsGroup from "../components/SocialMediaIconsGroup";
import GoToTop from "../hooks/GoToTop";

const { contact } = heroData;

const ContactUsPage = () => (
    <MainLayout>
        <>
            <Hero
                heading={contact.heading}
                text={contact.text}
                heroImg={contact.heroImg}
            >
                <div className="mt-16">
                    <SocialMediaIconsGroup arr={socialMediaIconsData} />
                </div>
            </Hero>
            <section className="py-10">
                Contact Us Page
            </section>
            <GoToTop />
        </>
    </MainLayout>
)

export default ContactUsPage