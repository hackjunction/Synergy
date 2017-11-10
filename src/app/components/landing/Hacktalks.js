import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './Hacktalks.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

import FaqSection from './FaqSection';

const Hacktalks = () => (
  <Scroll.Element name="hacktalks">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>ABOUT THE EVENT</h4>
        </Col>
      </Row>
      <BlockHeader title="FREQUENTLY ASKED QUESTIONS">
        <p>Got questions? Don’t worry, we have the answers.</p>
      </BlockHeader>
      <Row>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="What is Junction?">
            <p>
              Junction is a converging point thousands of developers, designers,
              and entrepreneurs from around the world. In 2016, Junction
              provided the biggest hackathon experience in Europe by bringing
              together 1300 participants from over 70 countries.
            </p>
            <p>
              Hackathons are all about taking something you love, combining it
              with tech and learning something in the process. Junction brings
              together hackers, designers, the coolest partners and hardware for
              one weekend of hacking.
            </p>
            <p>
              Junction is not your standard cafeteria hackathon. Junction is
              meant to be seen, to be heard, to be felt and most importantly to
              be experienced. Held annually in the cold and slushy Helsinki of
              late November, Junction is bound to be an unforgettable
              experience. Junction is the place to design and develop your ideas
              into actual projects together with like-minded hackers.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="Who can apply?">
            <p>
              Anyone is allowed to apply! We welcome anyone with an idea and
              some skills to implement it to come. You can apply here.
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
              Registration are closed already but do keep an eye
              on our facebook page and other social media for
              future events! We hope to see you there 🙂
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="Who are the people behind Junction?">
            <p>
              Junction is a non-profit organization completely run by
              volunteering students. We are super excited about entrepreneurship
              and tech events, and run multiple events throughout the year.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="Will there be travel reimbursements available?">
            <p>
              Yes! If you are coming from outside Helsinki metropolitan area it
              is possible to apply for reimbursements to cover some travel
              expenses. Depending on where you come from the reimbursement can
              be up to:
            </p>
            <ul>
              <li>Finland (Outside Helsinki region) 20€</li>
              <li>Baltics & Nordics & Russia 50€</li>
              <li>Rest of Europe 75€</li>
              <li>Rest of the World 150€</li>
            </ul>
            <p>
              We are also organising bus rides from Oulu and St. Petersburg.
            </p>
            <p>
              Note: To guarantee the travel reimbursement, please be ready to
              provide us with your travel receipts and bank address.
            </p>
            <p>
              Still want to know more about travel reimbursement? Get in contact
              with participants@hackjunction.com and get some help with it :)
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="Can I get help with my Visa application?">
            <p>
              Yes, we understand some participants coming to Junction,
              need a Visa application and we are more than happy to help
              with a Visa invitation letter. To proceed with this we will
              need some information for the letter that you can
              <a href="https://hackjunction.typeform.com/to/Oq2fDR">submit here</a>
            </p>
            <p>
              Note: We can only send Visa invitations to accepted participants
              who have confirmed they are coming to our event.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="How can I form my team?">
            <p>
              If you don’t yet have a team we will also help with matching
              people up at the beginning of the event. We’re also inviting
              people to different networking channels to make the team-building
              easier already before the event. If you have been accepted, you
              should have an invitation in your email for joining the Facebook
              group. A slack invite is incoming also!
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="How do tracks work? Can I only work on one track?">
            <p>
              You can work on multiple tracks at the same time, but it’s best if
              you could focus on one or two. Tracks are in situated in
              interconnected rooms: Think of it as a minihackathon within that
              theme, but the benefits of connecting to a huge pool of
              participants and activities.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="Will food be served at the event?">
            <p>
              Yes. There will be enough food to keep everyone hacking well into
              the night (and next day). This takes the form of basic scheduled
              catering, and on top of that some snacks, microwaveable food and
              meal-replacements. In our confirmation form, please state any
              dietary restrictions so we can take them into consideration when
              making orders.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="Who owns the intellectual property of hacks?">
            <p>
              All intellectual property produced at the event is owned solely by
              the participants and their team. Further plans may be discussed
              between the partners and the teams after the event.
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
              <li>Follow the MLH <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Code of Conduct</a></li>
              <li>Participants can only submit their project in one team</li>
            </ol>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="What size can a team be?">
            <p>
              Teams can be up to 5 people. If you want to hack alone, that’s
              totally fine. If you are still looking for a team, don’t worry, we
              will have team building and pitching sessions at the event. You
              can apply at any time and join any team at any time. The team
              question in the application is only to make sure the entire team
              makes it to the event.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="What about accommodation?">
            <p>
              We will have school-level accommodation available in multiple
              different destinations for a few hundred participants. If you want
              to make sure you have a room to sleep in, book a room at our
              partner hotel or hostel. More information this to come.
            </p>
            <p>
              If you want to make sure you have a room to sleep in,
              book a room at our partner hotels using the discount code
              (“Junction2017”). See hotels:
            </p>
            <p>
              Cheapsleep {'(https://www.cheapsleep.fi/)'}, discount code valid from 20.11. - 04.12.2017
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="What hardware can I hack on?">
            <p>
              We’ll have a wide variety of hardware at the event - more info to
              come soon! 😊
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="What about the schedule?">
            <p>
              Doors to the venue will open on November 24th 16.30 and Junction 2017
              officially ends on November 26th 18.00. Check here again for a link
              with the detailed program soon.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="What are the criteria for winning the Grand Prize?">
            <p>
              <b>Utilization of multiple technologies</b>
              <br />
              Does it combine multiple existing technologies into something
              larger than a sum of its parts?
            </p>
            <p>
              <b>Design and UX</b>
              <br />
              Does the design stand out? Is it user-friendly?
            </p>
            <p>
              <b>Real World Impact</b>
              <br />
              Could the project be a start for a viable business? Could it
              create actual change in the world?
            </p>
            <p>
              <b>Devpost Submission</b>
              <br />
              We want to see what kind of challenges you faced and what kind of
              learning took place.
            </p>
            <p>
              <b>Sisu</b>
              <br />
              Sisu – Finnish word for courage. Encouraging out-of-the-box
              thinking.
            </p>
          </FaqSection>
        </Col>
        <Col xs={12} md={6} className={styles.faqCell}>
          <FaqSection question="Where can I ask more questions?">
            <p>
              We are happy to help out with any questions! Just drop us a
              message at hello@hackjunction.com
            </p>
          </FaqSection>
        </Col>
        <Col
          style={{ display: 'none' }}
          xs={12}
          md={6}
          className={styles.faqCell}
        >
          <FaqSection question="Fruu cqnan kn j fnkbrcn ydiiun?">
            <p>/lrljmj</p>
          </FaqSection>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Hacktalks;
