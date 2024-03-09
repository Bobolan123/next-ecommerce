'use client'

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ShowModel from "./ShowModel";

export default function ApplyButton(props: any) {
  
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
      {isModalOpen && <ShowModel isModalOpen={isModalOpen} showModel = {showModal}/>}
    </>
  );
}
