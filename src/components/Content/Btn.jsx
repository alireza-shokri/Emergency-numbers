import styled from "./Accordion.module.css";


export function Btn({ infoBtn }) {
  return (
    <button className={styled.btn_option}>
      <a href={infoBtn.connect}>{infoBtn.btnLabel}</a>
    </button>
  );
}
