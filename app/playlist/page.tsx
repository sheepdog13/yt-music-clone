import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const page = (param: Params) => {
  return <div>playlist/[{param.searchParams.list}]</div>;
};

export default page;