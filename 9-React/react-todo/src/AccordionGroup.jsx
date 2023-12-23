import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language that enables interactive web pages.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How can I include JavaScript in my HTML?",
      answer:
        "You can include JavaScript in your HTML using the <script> tag, either in the head or body of your HTML document.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is an array?",
      answer:
        "An array is a data structure that stores a collection of elements, each identified by an index or a key.",
      isOpen: false,
    },
  ]);

  const openAccordion = (id) => {
    setFaq(
      faq.map((el) =>
        el.id === id ? { ...el, isOpen: true } : { ...el, isOpen: false }
      )
    );
  };

  return (
    <div>
      {faq.map(({ id, question, answer, isOpen }) => {
        return (
          <Accordion
            key={id}
            id={id}
            q={question}
            ans={answer}
            isOpen={isOpen}
            openAccordion={openAccordion}
          />
        );
      })}
    </div>
  );
};

export default AccordionGroup;
