"use client";

import React, { useState } from "react";
import { Button, Input, Modal, Typography } from "antd";

interface ShowModelProps {
  isModalOpen: boolean;
  showModel: () => void;
}

const ShowModel: React.FC<ShowModelProps> = (props: any) => {
  const handleOkorCancel = () => {
    props.showModel();
  };

  return (
    <Modal
      okButtonProps={{ style: { backgroundColor: '#1677ff' } }} 
      title="Applying Form"
      open={props.isModalOpen}
      onOk={handleOkorCancel}
      onCancel={handleOkorCancel}
      okText="Apply"
    >
      <Typography className="mt-10">You're applying ...:</Typography>

      <Typography>Email:</Typography>
      <Input className="mb-10" prefix="from server" disabled />
      <Typography>Upload file CV:</Typography>
    </Modal>
  );
};

export default ShowModel;
