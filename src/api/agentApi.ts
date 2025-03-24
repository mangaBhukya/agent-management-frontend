import axios from "axios";

const API_URL = "http://localhost:5000/api/agents";

export const createAgent = async (agentData: { name: string; email: string; mobile: string }) => {
    console.log('created-------', agentData);
  const response = await axios.post(API_URL, agentData);
  return response.data;
};

export const getAgents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
