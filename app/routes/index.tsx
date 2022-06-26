import React from "react";

const Test = React.lazy(() => import('~/components/test'));

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Test />
    </div>
  );
}
