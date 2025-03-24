import React from "react";
import AgentForm from "@components/AgentForm";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Create Agent</h1>
      <AgentForm />
      <Link href="/agents">View Agents</Link>
    </div>
  );
};

export default HomePage;
