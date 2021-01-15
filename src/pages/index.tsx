import { graphql, Link } from "gatsby";
import React from "react";
import Card from "../Components/Cards";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "../index.css";
import Layout from "../Layout/Main/index";
interface IndexPageProps {
  data: any;
}
dayjs.extend(relativeTime);
const Index: React.FC<IndexPageProps> = ({ data }) => {
  const { edges } = data.allContentfulBlogPosts;
  const content = edges.map((edge) => {
    const { title, author, createdAt, id } = edge.node;
    return (
      <Link key={id} style={{ textDecoration: "none" }} to={`/${id}`}>
        <Card
          id={id}
          title={title}
          author={author}
          date={dayjs(createdAt).fromNow()}
        />
      </Link>
    );
  });
  return (
    <>
      <Layout>{content}</Layout>
    </>
  );
};

export default Index;
export const mainQuery = graphql`
  query MyQuery {
    allContentfulBlogPosts {
      edges {
        node {
          author
          createdAt
          title
          id
          content {
            raw
          }
        }
      }
    }
  }
`;
