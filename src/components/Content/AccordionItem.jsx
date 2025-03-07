import { ItemOptions } from "./ItemOptions";

import styled from "./Accordion.module.css";

export function AccordionItem({ item, handelOpenItem, isOpen, index, isClosed }) {
  return (
    <li
      className={`${styled.list_item} ${isOpen && styled.classAnimation_open} ${isClosed && styled.classAnimation_close}`}
    >
      <ItemTitle
        title={item.title}
        isOpen={isOpen}
        handelOpenItem={handelOpenItem}
        index={index} />
      <div className={`${styled.Body_item} ${isOpen && styled.Body_item_open}`}>
        <ItemDesc desc={item.desc} />
        <ItemOptions options={item.options} />
      </div>
    </li>
  );
}




 function ItemTitle({ title, isOpen, handelOpenItem, index }) {
  return (
    <div
      className={styled.list_item_title}
      onClick={() => handelOpenItem(index)}
    >
      <h3>{title}</h3>
      <span className={styled.btn_taggle}>{isOpen ? "❌" : "➕"}</span>
    </div>
  );
}

function ItemDesc({ desc }) {
  return <p className={styled.item_desc}>{desc}</p>;
}
