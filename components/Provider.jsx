"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({ sessions, children }) => {
  return <SessionProvider session={sessions}>{children}</SessionProvider>;
};

export default Provider;
