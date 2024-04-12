"use client";
import useUIState from "@/hooks/useUIState";
import React, { useEffect } from "react";

const HeaderBgChanger = ({ imageSrc }) => {
  const { setheaderImageSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setheaderImageSrc(imageSrc);
  }, [imageSrc]);
  return <></>;
};

export default HeaderBgChanger;
