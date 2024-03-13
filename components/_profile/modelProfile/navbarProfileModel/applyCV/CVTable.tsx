"use client";

import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { fetchAllResumes } from "@/components/_admin/resume/actions/resumeServerAction";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "no",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Date",
    key: "date",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TableCV: React.FC = () => {
  
  
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />;
    </>
  );
};

export default TableCV;
