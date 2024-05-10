import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App(props) {
  return (
    <Accordion variant="shadow" hideIndicator={true}>
      {props.accordionItems.map((item) => (
        <AccordionItem key={item.key} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
