import axios from "axios";

export const uploadFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("http://localhost:5000/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.message || "File uploaded successfully!";
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "File upload failed.");
  }
};
