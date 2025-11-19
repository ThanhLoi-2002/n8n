import React from "react";

interface Props {
  params: { executionId: string };
}

const Page = ({ params }: Props) => {
  const { executionId } = params;
  return <div>Execution Id: {executionId}</div>;
};

export default Page;