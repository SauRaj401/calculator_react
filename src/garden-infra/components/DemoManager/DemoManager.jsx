import { DraggableSidebar } from "../DraggableSidebar";
import { PageHeadNavigation } from "../PageHeadNavigation";
import { SimplePageLayout } from "../SimplePageLayout";
import React from "react";

import "./DemoManager.scss";

export class DemoManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen:
        props.isSidebarOpen !== undefined ? props.isSidebarOpen : true,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isSidebarOpen !== undefined) {
      this.setState({ isSidebarOpen: nextProps.isSidebarOpen });
    }
  }

  handleEsc = (e) => {
    if (e.keyCode === 27 && window.location.hash === "#fullscreen") {
      window.location.hash = "";
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEsc);
  }

  render() {
    const {
      themeEnabled,
      trashEnabled,
      infoEnabled = true,
      desc,
      title,
      keywords,
      headerComponent,
      demoComponent,
      infoComponent,
      infoWidth,
    } = this.props;

    const { isSidebarOpen } = this.state;

    const sidebarWidth = infoWidth || 550;
    if (window.location.hash === "#fullscreen") {
      return <div className="demo-part">{demoComponent}</div>;
    } else {
      const headerComp = headerComponent ? (
        headerComponent
      ) : (
        <PageHeadNavigation
          title={title}
          themeEnabled={themeEnabled}
          trashEnabled={trashEnabled}
          infoEnabled={infoEnabled}
          isSidebarOpen={isSidebarOpen}
          handleInfo={(value) => {
            this.setState({ isSidebarOpen: value });
          }}
        />
      );
      return (
        <SimplePageLayout
          title={title}
          description={desc}
          keywords={keywords}
          headerComponent={headerComp}
        >
          <div className="demo-part">{demoComponent}</div>
          {isSidebarOpen && (
            <DraggableSidebar defaultWidth={sidebarWidth} className="info-part">
              {infoComponent}
            </DraggableSidebar>
          )}
        </SimplePageLayout>
      );
    }
  }
}
