import MainLayout from "../layouts/MainLayout";
import privacyPolicyData from "../data/privacyPolicyData";
import PolicyNumberGroup from "../components/PolicyNumberGroup";
import GoToTop from "../hooks/GoToTop";
import Cta from "../sections/Cta";

const PrivacyPolicyPage = () => (
    <MainLayout whiteBody={true}>
        <>
            <GoToTop />
            <section className="pt-[6.25rem] pb-8 p-container grid gap-10">
                <h1 className="heading-3 md:heading-2-bold text-dark-19 text-center">
                    Privacy Policy
                </h1>
                <p className="text-grey-89 body-text-6 md:body-text-3">
                    {`Thank you for choosing Connectifi as your internet service provider. We are committed to protecting \
                    your privacy and ensuring the security of your personal information. This Privacy Policy outlines our \
                    practices concerning the collection, use, and protection of your data when you use our services.`}
                </p>
            </section>
            <section className="p-container grid gap-[3.125rem] pb-0">
                {privacyPolicyData.map((item, idx) => (
                    <PolicyNumberGroup
                        key={`pnumgrp-${idx}`}
                        numbering={item.numbering}
                        heading={item.heading}
                        text={item.text}
                        subData={item.subData}
                    />
                ))}
            </section>
            <Cta />
        </>
    </MainLayout>
)

export default PrivacyPolicyPage