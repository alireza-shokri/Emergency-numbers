import styled from "./Accordion.module.css";
import { Btn } from "./Btn";

export function ItemOptions({ options }) {
  return (
    <ul className={styled.list_options}>
      {options.map((option, i) => (
        <Option option={option} key={i} />
      ))}
    </ul>
  );
}

function Option({ option }) {
  return (
    <li className={`${option.optionDesc? styled.item_option :styled.item_option_pablic} `}>
      <h3 className={styled.title_option}>{option.optionTitle}</h3>
      {option.optionDesc && (
        <p className={styled.desc_option}>{option.optionDesc}</p>
      )}

      <div className={styled.parentBtnOption}>
        {option.Btn.map((e) => (
          <Btn infoBtn={e} key={e.btnLabel} />
        ))}
      </div>
    </li>
  );
}
