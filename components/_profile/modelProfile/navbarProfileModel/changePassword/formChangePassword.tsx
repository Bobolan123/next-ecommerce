"use client";

import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { FormEvent } from "react";
import { changePassword } from "./actions/hangePasswordActions";
import { toast } from "react-toastify";

type FieldType = {
  username?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
  remember?: string;
};

interface IFormChangePasswordProps {
  user: {
    id: number;
    email: string;
    role: string;
  };
}

export default function FormChangePassword(props: IFormChangePasswordProps) {
  const { user } = props;

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    const { password, confirmPassword, username, newPassword } = values;
    if (newPassword === confirmPassword) {
      const data = {
        password: password as string,
        newPassword: newPassword as string,
        id: user.id as number,
      };
      const updatePassword = await changePassword(data);
      updatePassword.statusCode === 200
        ? toast.success(updatePassword.message)
        : toast.error(updatePassword.message);

        console.log(updatePassword)
    } else {
      toast.error("Confirm password are not the same with new password");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
      >
        <Input disabled defaultValue={user.email} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="New Password"
        name="newPassword"
        rules={[{ required: true, message: "Please input your New Password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          { required: true, message: "Please input your Confirm Password!" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
            color: "#fff",
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
