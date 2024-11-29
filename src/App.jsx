import { Link } from "react-router-dom";
import { Typography } from "antd";
import samplesImg from "@assets/samples.png";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography.Title>Simple Calculator Samples</Typography.Title>
      <Typography.Paragraph>
        {" "}
        Click the{" "}
        <a
          href="https://onurdayibasi.dev/simple-calculator-knowledge-map"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>{" "}
        to Go to React Digital Garden (onurdayibasi.dev)
      </Typography.Paragraph>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={samplesImg}
          width={600}
          className="logo react"
          alt="React logo"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Typography.Link>
            <Link to="simple-calculator">Simple Calculator</Link>{" "}
          </Typography.Link>
          <Typography.Link>
            <Link to="simple-calculator-responsive">
              Simple Calculator Responsive
            </Link>{" "}
          </Typography.Link>
        </div>
      </div>
    </div>
  );
}

export default App;
