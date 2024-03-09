"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import dynamic from "next/dynamic";

const AddJobModel = dynamic(
  () => import("./addJobModel"),
  { ssr: false }
);
const AddJobButton = (props: any) => {
  const [isOpenJobModel, setIsOpenJobModel] = useState(false);

  const handleJobModel = () => {
    setIsOpenJobModel(!isOpenJobModel);
  };
  return (
    <>
      <AddJobModel
        isOpenJobModel={isOpenJobModel}
        handleJobModel={handleJobModel}
      />
      <Button variant="contained" onClick={handleJobModel}>
        Add
      </Button>
    </>
  );
};

export default AddJobButton;
  