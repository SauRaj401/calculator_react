import { AntdIcons } from "../AntdIcons/AntdIcons";
import React from "react";

import "./OptionSelector.scss";

export class OptionSelector extends React.Component {
  isSelected = (selected, value) => {
    if (typeof selected === "string") {
      return selected === value;
    } else if (Array.isArray(selected)) {
      return selected.includes(value);
    }
    return false;
  };

  render() {
    const { options, selected, onSelect, layout } = this.props;
    const optionsVDOM = options.map((el) => {
      if (this.isSelected(selected, el.value))
        return (
          <div
            key={el.value}
            className="option selected"
            onClick={(e) => onSelect(e, el.value)}
          >
            {el.text}
            <span className="option-check">
              <AntdIcons.CheckOutlined />
            </span>
          </div>
        );
      else {
        return (
          <div
            key={el.value}
            className="option"
            onClick={(e) => onSelect(e, el.value)}
          >
            {el.text}
          </div>
        );
      }
    });

    const direction = layout ? layout : "vertical";

    return <div className={`option-selector ${direction}`}>{optionsVDOM}</div>;
  }
}
