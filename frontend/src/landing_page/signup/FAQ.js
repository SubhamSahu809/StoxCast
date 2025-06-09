import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What documents do I need to open an account?",
    answer:
      "You will need a PAN card, Aadhaar card linked with a mobile number, and a bank account for verification.",
  },
  {
    question: "How long does it take to open a Zerodha account?",
    answer:
      "It typically takes less than 24 hours after successful document submission and eSign.",
  },
  {
    question: "Is there any account maintenance fee?",
    answer:
      "There is no annual maintenance charge for the trading account. The demat account has a nominal annual fee.",
  },
  {
    question: "Can I open an account without Aadhaar?",
    answer:
      "Currently, Aadhaar is mandatory for online account opening. Offline methods are available but take longer.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
        <p className="text-muted">Get answers to the most common account queries.</p>
      </div>

      <div className="accordion rounded" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item border-0" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button d-flex justify-content-between align-items-center bg-white shadow-sm rounded mb-2 ${
                  openIndex === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`collapse-${index}`}
                style={{
                  fontWeight: "500",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  transition: "all 0.3s ease",
                }}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`ms-auto transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
              aria-labelledby={`heading-${index}`}
              /* Removed data-bs-parent to prevent Bootstrap JS conflicts */
            >
              <div className="accordion-body text-muted fs-6">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
