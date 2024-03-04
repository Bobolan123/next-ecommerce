"use client";

import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { fetchUpdateCompany } from "@/components/_admin/company/actions/companyServerAction";
import { Button } from "@mui/material";
import { GoPencil } from "react-icons/go";

const UpdateCompanyModel = (props: any) => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [form] = Form.useForm();


  const handleCompanyModel = () => {
    setIsOpen(!isOpen);
  };
  const handleOk = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("location", location);

      const response = await fetchUpdateCompany(formData, props.id);

      if (response) {
        console.log("Company updated successfully");
        window.location.reload(); // Reload the page
      } else {
        console.error("Failed to updaetd company:");
      }
    } catch (error) {
      console.error("Error updated company:", error);
    }

    // Close the modal
    handleCompanyModel();
  };

  return (
    <div>
      <Button className="m-0">
        <GoPencil
          style={{ color: "darkorange" }}
          size={20}
          onClick={handleCompanyModel}
        />
      </Button>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Company"
        centered
        open={isOpen}
        onOk={handleOk}
        onCancel={() => handleCompanyModel()}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <div className="flex justify-between">
            <Form.Item name="logo" label="Logo" rules={[{ required: true }]}>
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <TextArea
                rows={4}
                maxLength={6}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="Description"
            label="Description"
            rules={[{ required: false }]}
          >
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateCompanyModel;
