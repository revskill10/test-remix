import React, { Suspense } from "react";
import { json } from "@remix-run/node";
import { Thing } from "@truongteam/authz-ui";
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { key, fetchResource } from '~/hooks/use-data';
import { useLoaderData } from "@remix-run/react";
const Test = React.lazy(() => import('~/components/test'));
const queryClient = new QueryClient()
export const loader = async () => {
  await queryClient.prefetchQuery(key, fetchResource)
  return json({ qData: dehydrate(queryClient) });
};
export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={data.qData}>
        <Test />
        <Test />
        </Hydrate>
        </QueryClientProvider>
<Thing />
    </div>
  );
}
