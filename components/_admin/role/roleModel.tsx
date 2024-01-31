"use client";

import React, { useState } from "react";
import { Modal, Switch } from "antd";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IModelCompanyProps {
  isOpenRoleModel: boolean;
  handleRoleModel: () => void;
}

const RoleModel: React.FC<IModelCompanyProps> = (props: any) => {
  const [value, setValue] = useState("");

  const [form] = Form.useForm();

  return (
    <div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Company"
        centered
        open={props.isOpenRoleModel}
        onOk={() => props.handleRoleModel()}
        onCancel={() => props.handleRoleModel()}
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
          <div className="flex gap-4">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
              <Switch
                checkedChildren="active"
                unCheckedChildren="unactive"
                defaultChecked
              />
            </Form.Item>
          </div>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: false }]}
          >
            adsf    
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RoleModel;
