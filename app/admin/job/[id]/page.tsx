"use client";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import { Form, Input, Select, Switch } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

export default function Dashboard() {
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChangeSwitch = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const [form] = Form.useForm();

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between mb-5">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Upsert Job
              </Typography>
            </div>
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
            >
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Form.Item name="job" label="Job" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="skill"
                  label="Skills"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="location"
                  label="Location"
                  rules={[{ required: true }]}
                >
                  <Select
                    defaultValue="From db"
                    onChange={handleChange}
                    options={[
                      { value: "admin", label: "ADMIN" },
                      { value: "hr", label: "HR" },
                      { value: "user", label: "USER" },
                    ]}
                  />
                </Form.Item>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <Form.Item
                  name="salary"
                  label="Salary"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="amount"
                  label="Amount"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="level"
                  label="Level"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Select"
                    onChange={handleChange}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name="company"
                  label="Under Company"
                  rules={[{ required: true }]}
                >
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

              <div className="grid grid-cols-4 gap-4">
                <Form.Item
                  name="startDate"
                  label="Start Date"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="endDate"
                  label="End Date"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[{ required: true }]}
                >
                  <Switch defaultChecked onChange={onChangeSwitch} />
                </Form.Item>
                <div></div>
              </div>
              <Form.Item
                name="description"
                label="Job Description"
                rules={[{ required: true }]}
              >
                <ReactQuill theme="snow" value={value} onChange={setValue} />
              </Form.Item>
            </Form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
