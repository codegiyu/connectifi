import whiteLogo from "../assets/logo-white.svg";
import { socialMediaIconsData, footerLinksData } from "../data/footerData";
import SocialMediaIconsGroup from "../components/SocialMediaIconsGroup";
import FooterLinkGroup from "../components/FooterLinkGroup";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="">
            <section className="w-full bg-bright-blue pt-[8.125rem] pb-[11.25rem]">
                <section className="p-container">
                    <div className="w-full grid gap-20 grid-cols-1 lg:grid-cols-[1fr_185px_185px] xl:grid-cols[1fr_185px_185px]">
                        <div className="w-full grid gap-6">
                            <Link to="/" className="text-decoration-none text-white">
                                <div className="w-fit flex items-center gap-2">
                                    <img src={whiteLogo} alt="" className="" />
                                    <span className="font-bold text-2xl leading-6">Connectifi</span>
                                </div>
                            </Link>
                            <p className="body-text-6 md:body-text-5 text-grey-d9 font-normal max-w-[710px]">
                                Connect with Confidence, Powered by Connectifi - Your Trusted Source for Data Insights and Connectivity Solutions.
                            </p>
                            <SocialMediaIconsGroup arr={socialMediaIconsData} />
                        </div>
                        {footerLinksData.map((item, idx) => <FooterLinkGroup key={`flgrp-${idx}`} header={item.heading} linksData={item.links} />)}
                    </div>
                </section>
            </section>
            <section className="w-full bg-white pt-6 pb-9 text-center">
                <span className="w-max mx-auto body-text-6 md:body-text-5 leading-5 text-[#333] font-medium">
                    &copy; 2023 Connectifi. All rights reserved.
                </span>
            </section>
        </footer>
    )
}

export default Footer