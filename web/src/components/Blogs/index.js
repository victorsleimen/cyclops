import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Col, Row } from "antd";
import Blog from "./Blog";
import BlogsTitle from "./Title";
import BlogsDescription from "./Description";
import More from "./More";

const Blogs = () => {
  return (
    <div className={styles.featuresroot} style={{ overflow: "hidden" }}>
      <div className={styles.features}>
        <Row align="middle">
          <BlogsTitle />
        </Row>
        <Row>
          <Col span={18} offset={3}>
            <BlogsDescription />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 20, offset: 2 }} md={{ span: 6, offset: 3 }}>
            <Blog
              title={"What are Internal Developer Platforms?"}
              description={
                "A lot of the motivation behind building internal developer platforms is centered around the idea of self-service..."
              }
              blogLink={
                "https://cyclops-ui.com/blog/2025/02/13/what-are-dev-platforms"
              }
              avatar={"https://github.com/KaradzaJuraj.png"}
              banner={"/img/2025-02-13-what-are-dev-platforms/cover.jpeg"}
            />
          </Col>
          <Col xs={{ span: 20, offset: 2 }} md={{ span: 6, offset: 0 }}>
            <Blog
              title={"Cyclops: Platform Engineering for the Rest of Us"}
              description={
                "Platform engineering is possibly the biggest concept to take hold in infrastructure over the last 5+ years, and there’s a big reason why...."
              }
              blogLink={
                "https://cyclops-ui.com/blog/2025/02/03/PE-for-the-rest-of-us"
              }
              avatar={"https://github.com/richburroughs.png"}
              banner={"/img/2025-02-03-PE-for-the-rest-of-us/cover.png"}
            />
          </Col>
          <Col xs={{ span: 20, offset: 2 }} md={{ span: 6, offset: 0 }}>
            <Blog
              title={"Why we’re betting on Kubernetes (and you should too"}
              description={
                "We are literally all in, and I want to tell you why we feel comfortable with that decision..."
              }
              blogLink={
                "https://cyclops-ui.com/blog/2025/01/23/betting-on-k8s"
              }
              avatar={"https://github.com/KaradzaJuraj.png"}
              banner={"/img/2025-01-23-betting-on-k8s/cover.jpg"}
            />
          </Col>
        </Row>
        <More />
      </div>
    </div>
  );
};

export default Blogs;
