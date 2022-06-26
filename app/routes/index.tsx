import React from "react";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Test = React.lazy(() => import('~/components/test'));

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  });
};
export default function Index() {
  const { posts } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Test />
      <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
