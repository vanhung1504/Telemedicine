import { Accordion } from "react-bootstrap";
import styles from "./FAQ.module.scss";
import homeStyles from "../../Home.module.scss";

function FAQ() {
  const faqList = [
    {
      question: "Do Doccure provide security for patient’s data and privacy?",
      answer:
        "Yes, Doccure provide high security for patient’s data and                    privacy. It has eight levels of data security therefore no one can perform unauthorized activity.",
    },
    {
      question: "Is it possible to customize Doccure in concern to our needs?",
      answer:
        "Yes, with the help of product engineering team we offer customization service.",
    },
    {
      question: "Do you charge for upgrading the subscribed product?",
      answer: "No, it is completely free for upgrading the subscribed product.",
    },
    {
      question:
        "Is it possible to manage the chain of distributed inventory without any issues?",
      answer:
        "Yes, Doccure is a multi-chain distributed inventory. So it is easily manageable.",
    },
    {
      question:
        "Does Doccure offers immediate access to the activities like appointments, patients’ records and business reports?",
      answer:
        "With the help of Doccure mobile application you can easily view the complete details of the activities like appointments, patient’s records and business report.",
    },
    {
      question:
        "What if the staff members are not efficient with using the computers?",
      answer:
        "Usage becomes seamless with the user-friendly UX and UI designs. We are ready to help you with our training and support team.",
    },
    {
      question: "How about the availability of customer support from Doccure?",
      answer:
        "We ensure customer support in almost all the available platforms and excel in providing the same. We love to hear suggestions from you via customer support that will help us grow.",
    },
    {
      question: "Can Doccure be customized according to the needs?",
      answer:
        "We ensure customizing the features of your hospital which is offered at a reasonable price.",
    },
    {
      question: "Is trial version of Doccure available?",
      answer: "No. You can use the Demo version of Doccure.",
    },
    {
      question: "Is it charged for the upgrades that are on the way?",
      answer:
        "No. the upgrades are provided at free of cost for the subscribed products.",
    },
  ];

  return (
    <section id={styles.faqSection} className="py-5">
      <div className="container">
        <div className="row animation-InUp">
          <div className="col">
            <h2
              className={`text-center ${homeStyles["sections-main-heading"]}`}
            >
              FAQ
            </h2>
          </div>
        </div>

        <div className="row animation-InUp pt-4">
          <div className={`col-12 ${styles["col-12"]}`}>
            <Accordion>
              {faqList.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
