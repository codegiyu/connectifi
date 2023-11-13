import faqData from "../data/faqData";
import arrow from "../assets/arrow.svg";
const Faqs = () => {
  return (
    <section>
      <h1>FAQs</h1>
      <p>
        We've compiled a comprehensive list of FAQs to assist you. If you have a
        question, chances are you'll find the answer here. However, if you can't
        find what you're looking for, our dedicated support team is just a click
        or call away, ready to provide personalized assistance.
      </p>
      {faqData.map((faq) => (
        <div>
          <h2>{faq.q}</h2>
          <img src={arrow} alt="arrow-down" />
        </div>
      ))}
    </section>
  );
};

export default Faqs;
