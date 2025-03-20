"use client";

import Article from "../components/main/Article";
import Content from "../components/main/Content";
import ContentAction from "../components/main/ContentAction";
import Hero from "../components/main/Hero";
import Project from "../components/main/Project";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Project />
      <Content />
      <Article />
      <ContentAction />
    </>
  );
}