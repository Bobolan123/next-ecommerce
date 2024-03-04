"use client";

import React, { useState } from "react";
import { Modal, Select } from "antd";
import { Form, Input } from "antd";
import "react-quill/dist/quill.snow.css";

interface IModelUserProps {
  isOpenUserModel: boolean;
  handleUserModel: () => void;
}

const UserModel: React.FC<IModelUserProps> = (props: any) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [form] = Form.useForm();

  return (
    <div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new User"
        centered
        open={props.isOpenUserModel}
        onOk={() => props.handleUserModel()}
        onCancel={() => props.handleUserModel()}
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
          <div className="grid grid-cols-2 gap-4">
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="age" label="Age" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
               <Select
               placeholder="Select gender"
                onChange={handleChange}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
            </Form.Item>
            <Form.Item name="role" label="Role" rules={[{ required: true }]}>
              <Select
                defaultValue="admin"
                onChange={handleChange}
                options={[
                  { value: "admin", label: "ADMIN" },
                  { value: "hr", label: "HR" },
                  { value: "user", label: "USER" },
                ]}
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="company"
              label="Under the company"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default UserModel;
