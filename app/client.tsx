"use client"
import React, { FC } from "react";
import { useTRPC } from "./trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {}

const Client: FC<Props> = ({}) => {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return <div>Client {JSON.stringify(users)}</div>;
};

export default Client;
