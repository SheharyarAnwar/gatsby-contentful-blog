import React from "react";
import classes from "./index.module.css";

export interface CardProps {
  title: string;
  author: string;
  date: string;
  id: string;
}
const Index: React.FC<CardProps> = ({ title, author, date }) => {
  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4 style={{ letterSpacing: "2px", fontWeight: 400 }}>{date}</h4>
    </div>
  );
};
export default Index;
