import styled from "./Accordion.module.css";
export function Btn({ btnlabel,connect,styleBtn }) {
  return (
    <button className={styled[styleBtn]}>
      <a href={connect}>{btnlabel}</a>
    </button>
  );
}
