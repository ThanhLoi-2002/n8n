import React from "react";

interface Props {
  params: { credentialId: string };
}

const Page = ({ params }: Props) => {
  const { credentialId } = params;
  return <div>Credential Id: {credentialId}</div>;
};

export default Page;
