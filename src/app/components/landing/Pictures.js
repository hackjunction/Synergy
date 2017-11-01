import React from "react";
import Scroll from "react-scroll";
import { Row, Col } from "react-flexbox-grid";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";
import styles from "./Pictures.c.scss";

const images = [
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
  "http://lorempixel.com/400/200/",
];

const Pictures = () => (
  <Scroll.Element name="pictures">
    <Block className={styles.block}>
      <BlockHeader title="IN PICTURES" />
      <Row start="xs">
        {images.map((url, index) => (
          <Col xs={6} sm={4} md={2} key={index}>
            <div>
              <img src={url} className={styles.image} />
            </div>
          </Col>
        ))}
      </Row>
    </Block>
  </Scroll.Element>
);

export default Pictures;
