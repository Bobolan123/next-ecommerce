"use client";

import React, { useState } from "react";
import { Modal, Form, Input, Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { fetchCreateUser } from "./actions/userServerAction";
import { useRouter } from "next/navigation";

interface IModelUserProps {
  isOpenUserModel: boolean;
  handleUserModel: () => void;
}

const AddUserModel: React.FC<IModelUserProps> = (props: any) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const router =useRouter()
  const genderItems = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
  ];

  const roleItems = [
    { key: "admin", label: "Admin" },
    { key: "user", label: "User" },
  ];

  const handleOk = async () => {
    // Map the role key to the desired numerical value
    const roleValueMap: { [key: string]: number } = {
      admin: 1,
      user: 2,
    };

    // Ensure role is one of the keys in roleValueMap
    if (!(role in roleValueMap)) {
      // Handle error here if role is not one of the expected values
      return;
    }

    // Gather all the form data
    const userData = {
      name,
      gender,
      role: roleValueMap[role], // Set the role based on the mapped value
      email,
      password,
      age,
      company,
      location,
    };

    const user = await fetchCreateUser(userData);
    router.refresh()
    // Close the modal
    props.handleUserModel();
  };

  return (
    <div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Company"
        centered
        open={props.isOpenUserModel}
        onOk={handleOk}
        onCancel={() => props.handleUserModel()}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form name="validateOnly" layout="vertical" autoComplete="off">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input
                placeholder="Type Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Type password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input
                placeholder="Type name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="age" label="Age" rules={[{ required: true }]}>
              <Input
                placeholder="Type age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Dropdown
                overlay={
                  <Menu onClick={({ key }) => setGender(key)}>
                    {genderItems.map((item) => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button>
                  {gender || "Select Gender"} <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
            <Form.Item name="role" label="Role" rules={[{ required: true }]}>
              <Dropdown
                overlay={
                  <Menu onClick={({ key }) => setRole(key)}>
                    {roleItems.map((item) => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button>
                  {role || "Select Role"} <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="company"
              label="Company"
              rules={[{ required: true }]}
            >
              <Input onChange={(e) => setCompany(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Type location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddUserModel;
