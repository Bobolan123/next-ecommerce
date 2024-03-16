"use client";

import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { TableProps } from "antd";
import { endcodeJWT } from "@/components/actions/serverActionAll";
import { toast } from "react-toastify";

interface DataType {
  id: number;
  company: string;
  name: string;
  status: string;
  date: string;
  cvFile: string; // Add cvFile property
}

const handleOpenPdf = (cvFile: string) => {
  if (cvFile) {
    window.open(`http://localhost:8080/asset/resumes/${cvFile}`, "_blank");
  } else {
    toast.error("Not found pdf CV");
  }
};

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
  {
    title: "",
    key: "detail",
    dataIndex: "detail",
    render: (_, record) => (
      <Button
        type="primary"
        onClick={() => handleOpenPdf(record.cvFile)}
        style={{
          backgroundColor:"#1890ff",
          borderColor: "#1890ff",
        }}
      >
        Detail
      </Button>
    ),
  },
];

const TableCV: React.FC = () => {
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
        let data = await response.json();
        const updatedArray = data.data.map((item: DataType) => {
          return { ...item, detail: "Detail" };
        });
        setResume(updatedArray);
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
