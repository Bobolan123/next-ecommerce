"use client";

import { ISkill } from "@/type";
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Space,
  Select,
  SelectProps,
} from "antd";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { getEmail } from "./actions/getJobEmailServerActions";

type FieldType = {
  skills?: string;
};

interface IFormChangePasswordProps {
  skills: ISkill[];
}

export default function FormGetJobBySkills(props: IFormChangePasswordProps) {
  const { skills } = props;
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const skillIds = selectedSkills.map((skill) => parseInt(skill, 10));
    const res = await getEmail(skillIds);
    if (res?.statusCode === 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const options: SelectProps["options"] = [];

  skills.forEach((skill) => {
    options.push({
      label: skill.name,
      value: skill.id,
    });
  });

  const handleChangeSkills = (value: string[]) => {
    setSelectedSkills(value);
    console.log(selectedSkills);
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
      <Form.Item<FieldType> label="Skills" name="skills">
        <Space style={{ width: "100%" }} direction="vertical">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={[]}
            onChange={handleChangeSkills}
            options={options}
          />
        </Space>
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
