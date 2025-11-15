"use client";

import React, { createContext, useContext, useState } from "react";

type DashboardLayoutContextType = {
  toggleActive: boolean;
  setToggleActive: (value: boolean) => void;
};

const DashboardLayoutContext = createContext<DashboardLayoutContextType | null>(null);


export function DashboardLayoutProvider ({ children }: { children: React.ReactNode }) {
  const [toggleActive, setToggleActive] = useState(true);

  return (
    <DashboardLayoutContext.Provider value={{ toggleActive, setToggleActive }}>
      {children}
    </DashboardLayoutContext.Provider>
  );
};

export const useDashboardLayout = () => {
  const context = useContext(DashboardLayoutContext);
  if (!context) {
    throw new Error("useDashboardLayout must be used within a DashboardLayoutProvider");
  }
  return context;
};