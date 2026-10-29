"use client";

import { useEffect, useState } from "react";
import getMessage from "@/utils/fetchFunctions";

export default function About() {
  const [message, setMessage] = useState();

  useEffect(() => {
    async function getMsg() {
      const data = await getMessage();
      setMessage(data.message);
    }

    getMsg();
  }, []);

  return (
    <>
      <h1>About page</h1>
      {message}
    </>
  );
}
