import React, { useEffect } from "react";
import { Blog } from "../../Interfaces/blog.interface";
import Layout from "../../Layout/Main/index";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./index.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector } from "react-redux";
import { Rootstate } from "../../Store";
import { Link } from "gatsby";
dayjs.extend(relativeTime);
export interface BlogTemplateProps {
  pageContext: any;
}
const Index: React.FC<BlogTemplateProps> = ({ pageContext }) => {
  const ref = React.createRef<HTMLDivElement>();
  const data: Blog = pageContext.data;
  const user = useSelector((state: Rootstate) => state.userReducer.user);
  useEffect(() => {
    if (!user) {
      const children = Array.from(ref.current.children);
      children.map((val, i) => {
        if (i === 0) {
          const sliced = val.textContent.slice(0, 120);
          val.textContent = sliced;
          return;
        }
        val.remove();
      });
    } else {
      return;
    }
  }, [user]);

  return (
    <>
      <Layout>
        <div className={classes.blogContent}>
          <h1>{data.title}</h1>
          <div className={classes.authorBlock}>
            <h4>By {data.author}</h4>
            <h4>Posted {dayjs(data.createdAt).fromNow()}</h4>
          </div>
          <div ref={ref}>
            {documentToReactComponents(JSON.parse(data.content.raw))}
          </div>
          {!user ? <Link to="/register">Register To See More</Link> : null}
        </div>
      </Layout>
    </>
  );
};

export default Index;
