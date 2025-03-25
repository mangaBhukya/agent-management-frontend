"use client";

import React from "react";
import AgentForm from "@components/AgentForm";

const CreateAgentPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Create Agent</h1>

      <div className="w-full max-w-md">
        <AgentForm />
      </div>
    </div>
  );
};

export default CreateAgentPage;