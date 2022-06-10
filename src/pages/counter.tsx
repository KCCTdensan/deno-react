import React, { useState } from "react";
import Layout from "../components/layout.tsx";

export default () => {
  const [num, setNum] = useState(0);

  return (
    <Layout>
      <h1>Counter</h1>
      <div className="counterRow">
        <p>{num}</p>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          ++
        </button>
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          --
        </button>
      </div>
    </Layout>
  );
};
