import React from "react";
import { json } from "@remix-run/node";
import { Thing } from "@truongteam/authz-ui";
import { dehydrate, Hydrate } from 'react-query';
import { key, fetchResource } from '~/hooks/use-data';
import { useLoaderData, Link } from "@remix-run/react";
import { client } from "~/utils/react-query";
const Test = React.lazy(() => import('~/components/test'));
export const loader = async () => {
  await client.prefetchQuery(key, fetchResource)
  return json({ qData: dehydrate(client) });
};
export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to={'/login'}>Login</Link>
          <Hydrate state={data.qData}>
        <Test />
        <Test />
        </Hydrate>
<Thing />
    </div>
  );
}
