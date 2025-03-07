import { useState } from "react";
import styled from "./Accordion.module.css";
import { AccordionItem } from "./AccordionItem";

export default function Accordion({ information }) {
  const [openItem, setOpenItem] = useState(null);
  const [closeItem, setCloseItem] = useState(null);

  const handelOpenItem = function (num) {
    setOpenItem((e) => {
      setCloseItem(e);
      return e === num ? null : num;
    });
  };

  return (
    <ul className={styled.list}>
      {information.map((item, i) => (
        <AccordionItem
          item={item}
          key={item.title}
          isOpen={openItem === i}
          isClosed={closeItem === i}
          handelOpenItem={handelOpenItem}
          index={i}
        />
      ))}
    </ul>
  );
}


