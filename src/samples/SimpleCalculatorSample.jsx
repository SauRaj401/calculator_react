import { Calculator } from "@components/Calculator";
import { Typography } from "antd";

import { Info } from "@garden/components/Info/Info";
import { Usage } from "@garden/components/Usage/Usage";
import {
  LibraryTagsContainer,
  LibraryTags as Lib,
} from "@garden/components/LibraryTags";
import { DemoManager } from "@garden/components/DemoManager";

function SimpleCalculatorSample(props) {
  const renderInfo = () => {
    return (
      <>
        <Info forceOpen>
          <Typography.Paragraph>
            Here you will find a quick demonstration. This is a sample{" "}
            <b>Simple Calculator</b> application.
          </Typography.Paragraph>

          <Typography.Paragraph>
            It consists of a screen and several buttons. These buttons have
            different functions, and they can be grouped as the following.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <ul>
              <li> Numbers (1, 2, 3, 4, …) </li>
              <li>Operators (+, -, *, /, %)</li>
              <li>Command (=, AC)</li>
            </ul>
          </Typography.Paragraph>

          <Typography.Paragraph>
            Pressing these buttons allows you to make many simple calculations
            including addition, subtraction, division, multiplication, etc.
          </Typography.Paragraph>
        </Info>
        <Usage path={props.path} title={props.title} />

        <LibraryTagsContainer>
          <Lib.ReactLib /> <Lib.SassLib />
        </LibraryTagsContainer>
      </>
    );
  };

  return (
    <DemoManager
      title={props.title}
      description="Simple Calc Mechanics and Styling with React and SaSS"
      keywords='"Simple Calc Mechanics and Styling with React and SaSS'
      demoComponent={<Calculator />}
      infoComponent={renderInfo()}
    />
  );
}

export default SimpleCalculatorSample;
