"use client";

import React, { useEffect, useState } from "react";
import { getAgents } from "@api/agentApi";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

const AgentsPage: React.FC = () => {
  const [agents, setAgents] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();
        setAgents(data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Error fetching agents");
      }
    };

    fetchAgents();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent List</CardTitle>
      </CardHeader>
      <CardContent>
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {agents.map((agent) => (
            <li key={agent._id}>
              {agent.name} - {agent.email} - {agent.mobile}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AgentsPage;
