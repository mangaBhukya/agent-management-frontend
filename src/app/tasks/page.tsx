"use client";
import React, { useEffect, useState } from "react";
import { fetchTasks } from "@api/taskService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Task {
  firstName: string;
  phone: string;
  notes: string;
}

interface Agent {
  _id: string;
  name: string;
  email: string;
  mobile: string;
}

interface AgentWithTasks {
  agent: Agent;
  tasks: Task[];
}

const AgentTask: React.FC = () => {
  const [data, setData] = useState<AgentWithTasks[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasks = await fetchTasks();
        setData(tasks);
      } catch (err) {
        setError("Failed to fetch tasks.");
      }
    };

    loadTasks();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Distributed Tasks by Agent</h1>
      {data.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        data.map(({ agent, tasks }) => (
          <Card key={agent._id} className="mb-6">
            <CardHeader>
              <CardTitle>
                {agent.name} ({agent.email})
              </CardTitle>
              <p className="text-gray-500">Mobile: {agent.mobile}</p>
            </CardHeader>
            <CardContent>
              {tasks.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>First Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasks.map((task, index) => (
                      <TableRow key={index}>
                        <TableCell>{task.firstName}</TableCell>
                        <TableCell>{task.phone}</TableCell>
                        <TableCell>{task.notes || "No notes"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-gray-500">No tasks assigned.</p>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default AgentTask;