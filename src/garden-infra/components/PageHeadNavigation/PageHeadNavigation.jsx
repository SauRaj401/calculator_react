import { Typography } from "antd";
import { AntdIcons } from "../AntdIcons/AntdIcons";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./PageHeadNavigation.scss";

//=========================================================
function HomeButton() {
  const navigate = useNavigate();
  return (
    <>
      <div className={`btn-icon`}>
        <AntdIcons.HomeOutlined
          style={{ color: "#90bf90" }}
          onClick={() => navigate("/")}
        />
      </div>
    </>
  );
}

//=========================================================
function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <div className={`btn-icon`}>
        <AntdIcons.LeftOutlined
          style={{ color: "#90bf90" }}
          onClick={() => navigate(-1)}
        />
      </div>
    </>
  );
}

//=========================================================
function InfoButton(props) {
  const iconClass = props.isSidebarOpen === true ? "opened" : "closed";

  return (
    <div className={`info-icon ${iconClass}`}>
      <AntdIcons.InfoCircleOutlined
        onClick={() => props.handleClick(!props.isSidebarOpen)}
      />
    </div>
  );
}

//=========================================================
function TrashButton() {
  return (
    <div className="btn-icon">
      <AntdIcons.DeleteOutlined
        style={{ color: "#b52222" }}
        onClick={(e) => {
          e.preventDefault();
          window.localStorage.clear();
          window.location.reload();
        }}
      />
    </div>
  );
}

//=========================================================
export const ThemeButton = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  return (
    <div className={`theme-icon ${theme}`}>
      {theme === "light" && (
        <AntdIcons.BulbOutlined onClick={() => setTheme("dark")} />
      )}
      {theme === "dark" && (
        <AntdIcons.BulbFilled onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

//=========================================================
export const PageHeadNavigation = ({
  title,
  handleInfo,
  trashEnabled,
  themeEnabled,
  infoEnabled,
  isSidebarOpen,
}) => {
  return (
    <div className="head-part">
      <div className="head-left-part">
        <Typography.Title>{title}</Typography.Title>
      </div>
      <div className="head-right-part">
        {trashEnabled && <TrashButton />}
        {infoEnabled && (
          <InfoButton isSidebarOpen={isSidebarOpen} handleClick={handleInfo} />
        )}
        {themeEnabled && <ThemeButton />}
        <BackButton />
        <HomeButton />
      </div>
    </div>
  );
};
