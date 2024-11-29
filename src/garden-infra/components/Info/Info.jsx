import { Typography } from "antd";
import { AntdIcons } from "../AntdIcons/AntdIcons";
import { useState } from "react";

import "./Info.scss";

export function Info(props) {
  const [open, setOpen] = useState(false || props.forceOpen || props.isOpen);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const className = !open ? "info-container-collapsed" : "";
  const iconName = !open ? (
    <AntdIcons.DownOutlined />
  ) : (
    <AntdIcons.UpOutlined />
  );
  return (
    <>
      <Typography.Title level={4}>
        Information
        {!props.forceOpen && (
          <span
            style={{ cursor: "pointer" }}
            color="primary"
            onClick={handleClickOpen}
            aria-label="add to shopping cart"
          >
            {iconName}
          </span>
        )}
      </Typography.Title>
      <div className={className}>{props.children}</div>
    </>
  );
}
