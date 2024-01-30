"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import TabsProfileModel from "./navbarProfileModel/TabsProfileModel";

interface IModelProfileProps {
  openProfile: boolean;
  handlePopDownProfile: () => void;
}

const ModelProfile: React.FC<IModelProfileProps> = (props: any) => {
  return (
    <div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Account Management"
        centered
        open={props.openProfile}
        onOk={() => props.handlePopDownProfile()}
        onCancel={() => props.handlePopDownProfile()}
        width={1000}
      >
        <TabsProfileModel />
      </Modal>
    </div>
  );
};

export default ModelProfile;
