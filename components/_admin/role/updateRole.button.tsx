"use client";

import React, { useState } from "react";
import { Modal, Select } from "antd";
import { Form, Input } from "antd";
import { Button } from "@mui/material";
import { fetchUpdateRole } from "./actions/roleServerAction";
import { toast } from "react-toastify";
import { IRole } from "@/type";
import { GoPencil } from "react-icons/go";

interface IModelRoleProps {
  role: IRole;
}

const UpdatePermissionModel: React.FC<IModelRoleProps> = (
  props: IModelRoleProps
) => {
  const { role } = props;
  const [formData, setFormData] = useState({
    description: role.description,
    name: role.name,
  });

  const [isOpenRoleModel, setIsOpenRoleModel] = useState(false);

  const handleRoleModel = () => {
    setIsOpenRoleModel(!isOpenRoleModel);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOk = async () => {
    const res = await fetchUpdateRole(formData, role.id); // Pass formData to API call
    if (res?.statusCode === 200) {
      toast.success(res.message);
      handleRoleModel();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div>
      <Button onClick={handleRoleModel}>
        <GoPencil style={{ color: "darkorange" }} size={20} />
      </Button>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Role"
        centered
        open={isOpenRoleModel}
        onOk={handleOk}
        onCancel={handleRoleModel}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form name="validateOnly" layout="vertical" autoComplete="off">
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input
              name="description"
              defaultValue={role.description}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdatePermissionModel;
