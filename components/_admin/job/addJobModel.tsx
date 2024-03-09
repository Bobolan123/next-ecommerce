"use client";

import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Dropdown,
  Button,
  Menu,
  DatePicker,
  Space,
  Switch,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { fetchCreateJob } from "./actions/jobServerAction";
import { toast } from "react-toastify";

interface IModelJobProps {
  isOpenJobModel: boolean;
  handleJobModel: () => void;
}

const AddJobModel: React.FC<IModelJobProps> = (props: any) => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [quantity, setQuantity] = useState("");
  const [level, setLevel] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isActive, setIsActive] = useState(true); // Assuming 'isActive' represents the state of the Switch component

  const handleOk = async () => {
    try {
      // Validation checks...
      if (!name || !skills || !location || !salary || !quantity || !level || !company || !startDate || !endDate) {
        throw new Error("Please fill out all the required fields.");
      }

      // Gather all the form data
      const jobData = {
        name,
        skills,
        location,
        salary,
        quantity,
        level,
        company,
        startDate,
        endDate,
        isActive
      };
      return console.log(jobData)
      // Create job
      const job = await fetchCreateJob(jobData);

      if (job) {
        // Display success message
        toast.success("Job created successfully.");
      } else {
        toast.error("Job creation failed.");
      }

      // Close the modal
      props.handleJobModel();
    } catch (error: any) {
      // Display error message
      toast.error(error.message);
    }
  };

  const onStartDateChange = (date:any, dateString:any) => {
    setStartDate(dateString);
  };

  const onEndDateChange = (date:any, dateString:any) => {
    setEndDate(dateString);
  };

  return (
    <div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Company"
        centered
        open={props.isOpenJobModel}
        onOk={handleOk}
        onCancel={() => props.handleJobModel()}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form name="validateOnly" layout="vertical" autoComplete="off">
          <div className="grid grid-cols-3 gap-4">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input
                placeholder="Type Job Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="skills"
              label="Skills"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Type skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Type location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Form.Item
              name="salary"
              label="Salary"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Type salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Type quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="level"
              label="Level"
              rules={[{ required: true }]}
            >
              <Dropdown
                overlay={
                  <Menu onClick={({ key }) => setLevel(key)}>
                    <Menu.Item key="junior">JUNIOR</Menu.Item>
                    <Menu.Item key="fresher">FRESHER</Menu.Item>
                    <Menu.Item key="senior">SENIOR</Menu.Item>
                  </Menu>
                }
              >
                <Button>
                  {level || "Select Level"} <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
            <Form.Item
              name="company"
              label="Company"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Type company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true }]}
            >
              <Space direction="vertical">
                <DatePicker onChange={onStartDateChange} />
              </Space>
            </Form.Item>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true }]}
            >
              <Space direction="vertical">
                <DatePicker onChange={onEndDateChange} />
              </Space>
            </Form.Item>
            <Form.Item
              name="isActive"
              label="Active"
              valuePropName="checked"
              initialValue={isActive}
            >
              <Switch onChange={(checked) => setIsActive(checked)} />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddJobModel;
