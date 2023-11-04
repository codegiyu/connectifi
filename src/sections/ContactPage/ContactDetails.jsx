import ContactDetailsBlock from "../../components/ContactDetailsBlock";
import phone from "../../assets/heroIconPhone.svg";
import mail from "../../assets/mail.svg";
import map from "../../assets/map.svg";
import social from "../../assets/social.svg";

const ContactDetails = () => {

    return (
        <section className="p-container-narrow">
            <section className="w-full bg-white py-[3.125rem] lg:py-[6.25rem] px-[45px] lg:px-[90px] grid gap-7 lg:gap-[3.125rem] rounded-[20px] -translate-y-10 xl:-translate-y-12">
                <section className="w-full grid gap-2 text-center">
                    <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 text-dark-19">
                        Contact Us
                    </h2>
                    <span className="mx-auto text-grey-89 body-text-6 md:body-text-3 w-full">
                        {`We'd love to hear from you. Here's how you can always reach us.`}
                    </span>
                </section>
                <section className="w-full grid lg:grid-cols-2 gap-x-4 gap-y-6">
                    <ContactDetailsBlock
                        icon={phone}
                        heading="Phone numbers"
                    >
                        <>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>(+234) 801-111-9999</span>
                                <span>(+234) 801-111-9999</span>
                            </div>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>(+234) 801-111-9999</span>
                                <span>(+234) 801-111-9999</span>
                            </div>
                        </>
                    </ContactDetailsBlock>
                    <ContactDetailsBlock
                        icon={map}
                        heading="Address"
                    >
                        <>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>
                                    ABC Company, Inc.789 Elm Avenue 10th Floor City, State ZIP Code, Lekki,Lagos State.
                                </span>
                            </div>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>
                                    No 37, Main Street, Suite 450, Lekki, Lagos State.
                                </span>
                            </div>
                        </>
                    </ContactDetailsBlock>
                    <ContactDetailsBlock
                        icon={mail}
                        heading="Email Address"
                    >
                        <>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>
                                    Connectifi457@gmail.com
                                </span>
                            </div>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>
                                    SupportConnectifi@gmail.com
                                </span>
                            </div>
                        </>
                    </ContactDetailsBlock>
                    <ContactDetailsBlock
                        icon={social}
                        heading="Social Media"
                    >
                        <>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>Facebook: Connectifi</span>
                                <span>Instagram: Connectifi</span>
                            </div>
                            <div className="w-full flex justify-between body-text-7 lg:body-text-6 text-grey-89">
                                <span>Twitter: @ConnectifiInternet</span>
                            </div>
                        </>
                    </ContactDetailsBlock>
                </section>
            </section>
        </section>
    )
}

export default ContactDetails;