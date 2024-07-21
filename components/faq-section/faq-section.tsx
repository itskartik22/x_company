import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const FAQSection = () => {
  return (
    <div id="faq-section" className="w-full flex flex-col md:gap-6 gap-4 bg-white py-10 md:px-28 px-6">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="flex flex-col lg:flex-row justify-between lg:gap-6">
        <div className="lg:w-1/2 flex flex-col">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the cost of a mobile application?
              </AccordionTrigger>
              <AccordionContent>
                Development terms directly depend on the requirements for the
                mobile application, the characteristics of the company, as well
                as the wishes of the customer.
              </AccordionContent>
              <AccordionContent>
                Average development time from start to finished application:
                Medium projects up to 3 months. Large projects about 4-6 months.
                To get a more accurate estimate of the project completion time,
                it is necessary to determine the main task of the application,
                think over its logic and functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do you provide a guarantee for the mobile application?
              </AccordionTrigger>
              <AccordionContent>
                Development terms directly depend on the requirements for the
                mobile application, the characteristics of the company, as well
                as the wishes of the customer.
              </AccordionContent>
              <AccordionContent>
                Average development time from start to finished application:
                Medium projects up to 3 months. Large projects about 4-6 months.
                To get a more accurate estimate of the project completion time,
                it is necessary to determine the main task of the application,
                think over its logic and functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How long will development take?
              </AccordionTrigger>
              <AccordionContent>
                Development terms directly depend on the requirements for the
                mobile application, the characteristics of the company, as well
                as the wishes of the customer.
              </AccordionContent>
              <AccordionContent>
                Average development time from start to finished application:
                Medium projects up to 3 months. Large projects about 4-6 months.
                To get a more accurate estimate of the project completion time,
                it is necessary to determine the main task of the application,
                think over its logic and functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                I will not tell my idea, do you guarantee confidentiality?
              </AccordionTrigger>
              <AccordionContent>
                Development terms directly depend on the requirements for the
                mobile application, the characteristics of the company, as well
                as the wishes of the customer.
              </AccordionContent>
              <AccordionContent>
                Average development time from start to finished application:
                Medium projects up to 3 months. Large projects about 4-6 months.
                To get a more accurate estimate of the project completion time,
                it is necessary to determine the main task of the application,
                think over its logic and functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
