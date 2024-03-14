"use client";

import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { fetchAllResumes } from "@/components/_admin/resume/actions/resumeServerAction";
import { endcodeJWT } from "@/components/actions/serverActionAll";

interface DataType {
  id: number;
  company: string;
  name: string;
  status: string;
  date: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
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
    dataIndex: "date",
  },
];

const TableCV: React.FC = (props: any) => {
  const [resume, setResume] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await endcodeJWT();
        const response = await fetch(
          `http://localhost:3001/api/user/read/cv/${user.id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResume(data.data);
      } catch (error) {
        throw new Error(`Error fetching data:${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={resume}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default TableCV;
