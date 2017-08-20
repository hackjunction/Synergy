import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from "./Hacktalks.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

import FaqSection from "../FaqSection";

const Hacktalks = () =>
  <Block>
    <Row>
      <Col xs={12} className="bold text-secondary">
        <h4>ABOUT THE EVENT</h4>
      </Col>
    </Row>
    <BlockHeader title="FREQUENTLY ASKED QUESTIONS">
      <p>
        Anything you want to know about the event, we got you covered. While we
        can argue we have all the answers, if you feel something is missing,
        feel free to contact us.
      </p>
    </BlockHeader>
    <Row>
      <Col xs={12} md={6} className={styles.faqCell}>
        <FaqSection question="What is Junction?">
          <p>
            Junction is a converging point thousands of developers, designers,
            and entrepreneurs from around the world. In 2016, Junction provided
            the biggest hackathon experience in Europe by bringing together 1300
            participants from over 70 countries.
          </p>
          <p>
            Hackathons are all about taking something you love, combining it
            with tech and learning something in the process. Junction brings
            together hackers, designers, the coolest partners and hardware for
            one weekend of hacking.
          </p>
          <p>
            Junction is not your standard cafeteria hackathon. Junction is meant
            to be seen, to be heard, to be felt and most importantly to be
            experienced. Held annually in the cold and slushy Helsinki of late
            November, Junction is bound to be an unforgettable experience.
            Junction is the place to design and develop your ideas into actual
            projects together with like-minded hackers.
          </p>
        </FaqSection>
      </Col>
      <Col xs={12} md={6} className={styles.faqCell}>
        <FaqSection question="Who can apply?">
          <p>
            Anyone is allowed to apply! We welcome anyone with an idea and some
            skills to implement it to come. You can apply here.
          </p>
        </FaqSection>
      </Col>
      <Col xs={12} md={6} className={styles.faqCell}>
        <FaqSection question="Does it cost to attend?">
          <p>
            Of course not. It’s completely FREE to attend and includes food,
            drinks and Wifi!
          </p>
        </FaqSection>
      </Col>
      <Col xs={12} md={6} className={styles.faqCell}>
        <FaqSection question="When and where can I apply?">
          <p>
            The application period will open on 1st September and close on 15th
            October 2017. Make sure to apply HERE!
          </p>
        </FaqSection>
      </Col>
      <Col xs={12} md={6} className={styles.faqCell}>
        <FaqSection question="Who are the people behind Junction?">
          <p>
            Junction is a non-profit organization completely run by volunteering
            students. We are super excited about entrepreneurship and tech
            events, and run multiple events throughout the year.
          </p>
        </FaqSection>
      </Col>
      <Col xs={12} md={6} className={styles.faqCell}>
        <FaqSection question="Are there any rules for competing?">
          <p>Yes.</p>
          <ol>
            <li>No code written before the event.</li>
            <li>No remote team members.</li>
            <li>Maximum 5 team members</li>
            <li>Follow the MLH Code of Conduct</li>
            <li>Participants can only submit their project in one team</li>
          </ol>
        </FaqSection>
      </Col>
    </Row>
  </Block>;

export default Hacktalks;
