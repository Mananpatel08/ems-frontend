"use client";
import { DashboardLayout } from "@/components/layout";
import { useParams } from "next/navigation";
import React from "react";

const FromDetailPage = () => {
  const { formId } = useParams<{ formId: string }>();
  return (
    <DashboardLayout>
      <h1>cOOMING sOON...</h1>
    </DashboardLayout>
  );
};

export default FromDetailPage;
