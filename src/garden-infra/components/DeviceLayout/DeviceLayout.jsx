import IframeResizer from "iframe-resizer-react";
import React from "react";

export const DeviceLayoutTypes = {
  iphone: { name: "iphone", width: "375px", height: "667px" },
  ipadmini: { name: "ipadmini", width: "768px", height: "1024px" },
  ipadair: { name: "ipadair", width: "820px", height: "1180px" },
  macbook: { name: "macbook", width: "1536px", height: "960px" },
};

export class DeviceLayout extends React.Component {
  render() {
    const { deviceLayoutType, src } = this.props;
    const { width, height } = deviceLayoutType;

    return (
      <div style={{ display: "flex", width: "95%", height: "100%" }}>
        <IframeResizer
          src={src}
          style={{ width: width, height: height, overflow: "auto" }}
          scrolling="yes"
        />
      </div>
    );
  }
}
