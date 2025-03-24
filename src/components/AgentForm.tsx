"use client";

import React, { useState } from "react";
import { createAgent } from "@api/agentApi";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

const AgentForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createAgent(formData);
      setMessage("Agent created successfully!");
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create Agent</CardTitle>
      </CardHeader>
      <CardContent>
        {message && <p className="text-green-600">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <Input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
          <Button type="submit">Create Agent</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AgentForm;
