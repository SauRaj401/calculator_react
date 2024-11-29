import {
  DeviceLayout,
  DeviceLayoutTypes,
} from "@garden/components/DeviceLayout/DeviceLayout";
import { OptionSelector } from "@garden/components/OptionSelector";

import { Typography } from "antd";

import { Info } from "@garden/components/Info/Info";
import {
  LibraryTagsContainer,
  LibraryTags as Lib,
} from "@garden/components/LibraryTags";
import { DemoManager } from "@garden/components/DemoManager";

import React from "react";

function DifferentDevicesLayoutSample(props) {
  const [mode, setMode] = React.useState("macbook");
  const handleModeChange = (e, value) => setMode(value);
  const renderInfo = () => {
    return (
      <>
        <Info forceOpen={true}>
          <Typography.Paragraph>
            Here you will find a quick demonstration. This is a sample{" "}
            <b>Device Layout</b> application.
          </Typography.Paragraph>
          <Typography.Paragraph>
            When a device is selected, the application screen size changes
            accordingly and the app size fits to the the device screen.
          </Typography.Paragraph>
          <Typography.Paragraph>
            The below image displays the responsiveness of Simple Calculator
            with different layouts (iPhone, iPad Mini, iPad Air, Macbook).
          </Typography.Paragraph>
        </Info>

        <Typography.Title level={4}>Select Device</Typography.Title>
        <OptionSelector
          selected={mode}
          onSelect={handleModeChange}
          options={[
            { value: "iphone", text: "iPhone" },
            { value: "ipadmini", text: "iPad Mini" },
            { value: "ipadair", text: "iPad Air" },
            { value: "macbook", text: "Macbook" },
          ]}
        />

        <LibraryTagsContainer>
          <Lib.ReactLib /> <Lib.SassLib />
        </LibraryTagsContainer>
      </>
    );
  };

  return (
    <DemoManager
      title={props.title}
      description="Simple Calc With Diff Devices"
      keywords="Simple Calc With Diff Devices"
      demoComponent={
        <DeviceLayout
          src="https://onurdayibasi.dev/simple-calculator#fullscreen"
          deviceLayoutType={DeviceLayoutTypes[mode]}
        />
      }
      infoComponent={renderInfo()}
    />
  );
}

export default DifferentDevicesLayoutSample;
