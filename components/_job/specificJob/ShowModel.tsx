"use client";

import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Typography } from "antd";
import { getCookie } from "cookies-next";
import Link from "next/link";

interface ShowModelProps {
  isModalOpen: boolean;
  showModel: () => void;
}

const ShowModel: React.FC<ShowModelProps> = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const jwt = getCookie("jwt");
    setIsLogin(!!jwt); // Simplified setting of isLogin based on jwt existence
  }, []);

  const handleOkorCancel = () => {
    props.showModel();
  };

  return isLogin ? (
    <Modal
      okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      title="Applying Form"
      visible={props.isModalOpen} // Changed from "open" to "visible"
      onOk={handleOkorCancel}
      onCancel={handleOkorCancel}
      okText="Apply"
    >
      <Typography className="mt-10">You're applying ...:</Typography>

      <Typography>Email:</Typography>
      <Input className="mb-10" prefix="from server" disabled />
      <Typography>Upload file CV:</Typography>
    </Modal>
  ) : (
    <Modal
      okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      title="Applying Form"
      visible={props.isModalOpen} // Changed from "open" to "visible"
      onOk={handleOkorCancel}
      onCancel={handleOkorCancel}
      okText="Ok"
    >
      <div className="flex items-center justify-center">
        <Link href={"/login"} className="btn">
          <Button type="link" danger className="px-4 py-2 rounded-lg text-lg">
            Login now
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default ShowModel;
