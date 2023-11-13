import faqData from "../../data/faqData";
import FaqSingle from "../../components/FaqSingle";

const FAQs = () => {

    return (
        <section className="p-container py-[3.125rem] lg:py-[6.25rem]">
            <section className="w-full grid gap-8">
                <section className="w-full grid gap-6">
                    <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 text-dark-19">
                        FAQs
                    </h2>
                    <span className="mx-auto text-grey-89 body-text-6 md:body-text-3 w-full">
                        {`We've compiled a comprehensive list of FAQs to assist you. If you have a question, chances are you'll \
                        find the answer here. However, if you can't find what you're looking for, our dedicated support team is \
                        just a click or call away, ready to provide personalized assistance.`}
                    </span>
                </section>
                <section className="w-full grid gap-4">
                    {faqData.map((item, idx) => (
                        <FaqSingle
                            key={`faq-${idx}`}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </section>
            </section>
        </section>
    )
}

export default FAQs;