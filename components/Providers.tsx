"use client";

import { GlobalContextProvider } from "@/contexts/GlobalContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

export default Providers;
