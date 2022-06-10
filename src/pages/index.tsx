import React, { useState } from "react";
import Layout from "../components/layout.tsx";

const Index = () => {
  const [name, setName] = useState("");
  const [res, setRes] = useState("");

  return (
    <Layout>
      <h1>しりとり</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <button
        onClick={async () => {
          const res = await fetch("/api/unko", {
            method: "POST",
            body: JSON.stringify({ name }),
          }).then((r) => r.text());
          setRes(res);
        }}
      >
        submit
      </button>
      <p>{res}</p>
    </Layout>
  );
};
export default Index;
