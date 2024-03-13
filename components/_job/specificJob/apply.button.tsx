'use client'

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ShowModel from "./ShowModel";
import { IJob } from "@/type";

interface IApplyButtonProps {
  job:IJob
}
export default function ApplyButton(props: IApplyButtonProps) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        className="mb-10"
        onClick={() => showModal()}
      >
        Apply now
      </Button>
      {isModalOpen && <ShowModel isModalOpen={isModalOpen} showModel = {showModal} job = {props.job}/>}
    </>
  );
}
