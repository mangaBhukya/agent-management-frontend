"use client";
import React from "react";
import CSVUpload from "@components/CSVUpload";

const UploadPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
         <CSVUpload />
    </div>
  );
};

export default UploadPage;
