"use client";
import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { uploadFile } from "@api/uploadService";

const CSVUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const allowedExtensions = ["csv", "xlsx", "xls"];
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();

      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError("Invalid file type. Only CSV, XLSX, and XLS files are allowed.");
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a valid file to upload.");
      return;
    }

    setLoading(true);

    try {
      const message = await uploadFile(file);
      setSuccessMessage(message);
      setFile(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Upload CSV for Task Distribution</h1>
      
      <Input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileChange} />

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      
      <Button className="mt-4" onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload File"}
      </Button>
    </div>
  );
};

export default CSVUpload;