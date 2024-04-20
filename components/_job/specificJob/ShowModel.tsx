"use client";

// Import useState from 'react'
import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Typography, Upload } from "antd";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { UploadOutlined } from "@mui/icons-material";
import { IJob } from "@/type";
import { endcodeJwt, fetchCreateResume } from "../actions/jobServerAction";
import { toast } from "react-toastify";

interface ShowModelProps {
  isModalOpen: boolean;
  showModel: () => void;
  job: IJob;
}

const ShowModel: React.FC<ShowModelProps> = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [idUser, setIdUser] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null); // State to store uploaded file
  const { job } = props;

  useEffect(() => {
    const jwt = getCookie("jwt");
    setIsLogin(!!jwt);
    if (jwt) {
      endcodeJwt(jwt)
        .then((user) => {
          setEmail(user.email);
          setIdUser(user.id);
        })
        .catch((error) => {
          console.error("Error while getting user email:", error);
        });
    }
  }, []);

  const handleOk = async () => {
    try {
      const formData = new FormData();

      if (uploadedFile) {
        formData.append("cvFile", uploadedFile);
        formData.append("status", "pending");
        formData.append("user", idUser.toString());
        formData.append("job", job.id.toString());
        const response = await fetchCreateResume(formData);
        if (response) {
          const data = await response.json();
          toast.success(data.message);
        } else {
          throw new Error("Failed to create resume");
        }
      } else {
        toast.error("Resume is required");
      }
    } catch (error: any) {
      toast.error("Error updating resume: " + error.message);
    }
  };

  const handleCancel = () => {
    props.showModel();
  };

  const handleFileUpload = (info: any) => {
    if (info.file.status === "done") {
      if (info.file.type === "application/pdf") {
        setUploadedFile(info.file.originFileObj);
      } else {
        toast.error("Only PDF files are accepted");
      }
    }
  };

  return isLogin ? (
    <Modal
      okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      title="Applying Form"
      open={props.isModalOpen} // Changed from "open" to "visible"
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Apply"
    >
      <Typography className="mt-10">You're applying ...:</Typography>

      <Typography>Email:</Typography>
      <Input className="mb-10" prefix={email} disabled />
      <Typography>Upload file CV:</Typography>
      <Upload {...props} onChange={handleFileUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {uploadedFile && (
        <Typography className="mt-2">
          File Uploaded: {uploadedFile.name}
        </Typography>
      )}
    </Modal>
  ) : (
    <Modal
      okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
      title="Applying Form"
      open={props.isModalOpen}
      onOk={handleCancel}
      onCancel={handleCancel}
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
