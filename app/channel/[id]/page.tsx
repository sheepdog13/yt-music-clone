import React from "react";

interface ChannelPageProps {
  params: {
    id: string;
  };
}

const page = (params: ChannelPageProps) => {
  return <div>channel[{params.params.id}]</div>;
};

export default page;
