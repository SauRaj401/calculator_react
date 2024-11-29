import { Modal, Typography } from "antd";
import { AntdIcons } from "../AntdIcons/AntdIcons";
import * as React from "react";

export function Usage(props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const extension = props.extension ? props.extension : "gif";

  return (
    <>
      <Typography.Title level={4}>
        Application Video
        <AntdIcons.FullscreenOutlined
          onClick={showModal}
          style={{ marginLeft: 3, cursor: "pointer" }}
        />
      </Typography.Title>
      <img
        style={{ cursor: "pointer" }}
        onClick={showModal}
        src={`https://d3jy31tj1gt845.cloudfront.net/reactdigitalgarden/gif${props.path}.${extension}`}
        alt="UsageImages"
        width="320"
      />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src={`https://d3jy31tj1gt845.cloudfront.net/reactdigitalgarden/gif${props.path}.${extension}`}
            alt="UsageImages"
            height="auto"
            width="80%"
            object-fit="cover"
          />
        </div>
      </Modal>
    </>
  );
}
