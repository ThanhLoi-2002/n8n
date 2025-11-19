import React from "react";

interface Props {
  params: { workflowId: string };
}

const Page = ({ params }: Props) => {
  const { workflowId } = params;
  return <div>Workflow Id: {workflowId}</div>;
};

export default Page;