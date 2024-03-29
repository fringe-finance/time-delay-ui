import React, { CSSProperties } from "react";
import { Space } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export const Footer: React.FC = () => {
  const iconStyle: CSSProperties = {
    fontSize: 22,
    color: "#fff",
  };
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <Space direction="vertical" size="large">
        <img
          src="/icons/pankod-icon.svg"
          alt="pankod"
          width="140"
          height="28"
        />
        <Space align="center" size="middle">
          <a
            href="https://github.com/pankod"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <GithubOutlined />
          </a>
          <a
            href="https://twitter.com/PankodDev"
            target="_blank"
            style={iconStyle}
            rel="noreferrer"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
            target="_blank"
            style={iconStyle}
            rel="noreferrer"
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
            target="_blank"
            style={iconStyle}
            rel="noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </Space>
      </Space>
    </div>
  );
};
