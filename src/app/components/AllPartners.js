import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactPlayer from 'react-player';
import styles from './Track.c.scss';
import Block from './viewBlocks/Block';
import BlockHeader from './viewBlocks/BlockHeader';
import TopNav from './TopNav';
import Slideshow from './Slideshow';
import PartnerSection from './landing/PartnerSection';
import Footer from './landing/Footer';

const AllPartners = () => (
  <div>
    <Grid className={styles.hero} fluid>
      <TopNav />
    </Grid>
    <Slideshow
      elements={[
        {
          index: '0',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/07/allpartnerscar1.jpg',
          quote: '“Awesome experience.”',
          quoter: '- Participant 2017'
        },
        {
          index: '1',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/08/car5.jpg',
          quote:
            '“The excitement and motivation to learn was very motivating for us. It was clear that we had come to the right place.”',
          quoter: 'Nordea, partner 2017'
        },
        {
          index: '2',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/08/car4.jpg',
          quote: '“The best hackathon in Europe. Ever.”',
          quoter: '- Participant 2017'
        },
        {
          index: '3',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/07/allpartnerscar2.jpg',
          quote: '“Junction was really impressive. It felt a bit like a piece of Silicon Valley in Otaniemi.”',
          quoter: '- Finnair, partner 2017'
        },
        {
          index: '4',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/08/car5.jpg',
          quote: '“Hundreds of people making crazy stuff.”',
          quoter: '- Participant 2017'
        },
        {
          index: '5',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/07/allpartnerscar2.jpg',
          quote:
            '“Deep collaborations between young entrepreneurs with fresh ideas and executives from large industry players.”',
          quoter: '- Erica Swallow, Huffington Post 2016'
        }
      ]}
    />
    <Block className={styles.textblock}>
      <BlockHeader title="WHAT IS JUNCTION FOR PARTNERS">
        <p>
          Junction provides a unique opportunity to work and interact with thousands of developers for your company.
          <br />
          <br />
          In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along
          the journey we have connected our partners with new audiences and helped them to build their own developer
          community. Junction has grown into an access point to emerging top tech talents from all over the world.
        </p>
      </BlockHeader>
    </Block>
    <Block className={styles.textblock_black}>
      <h1>Why partner with us?</h1>
      <h2>HACKATHON EXPERIENCE</h2>
      <p>
        Junction is all about creating new projects by bringing together motivated developers and industry experts. 48
        hours of fast prototyping gives unparalleled ideas and fresh concepts, resulting in finished projects solving
        challenges set by our partners. Over 60 partners from a wide variety of different industries work together
        during the weekend. This creates plenty of possibilities for new collaborations.
      </p>
      <h2>ACCELERATING PROJECTS</h2>
      <p>
        Junction is a birthplace for almost 400 teams consisting of a selected group of top tech talents. No other event
        in Europe is able to accomplish the same. In 2018 we ensure that the teams will stay together after the event by
        providing them access to early stage VCs, startup mentors and business coaches at Junction Launchpad area during
        the event. Additionally, Junction will provide frameworks and concrete guidance for continuing the projects.
      </p>
      <h2>ENHANCED RECRUITING</h2>
      <p>
        In Junction 2017, our partners recruited tens of tech talents to their ranks and got hundreds of recruiting
        leads. Hackathons are a great place to get first-hand experience on the teamworking, project management and
        technical skills of the participants. Junction 2018 provides a powerful, specified matchmaking and meeting area
        to boost up the interactions between participants and partners.
      </p>
      <h2>EMPLOYER BRANDING</h2>
      <p>
        Gain recognition among thousands of top tech talents, other creative partner companies and global media.
        Participating in Junction is an excellent opportunity for a partner to steer their public image towards one that
        is at the bleeding edge of technology
      </p>
      <h2>EMPLOYER RETENTION, LEARNING EXPERIENCE AND CULTURAL IMPACT</h2>
      <p>
        Junction creates a great opportunity for partner teams to experience an event which promotes learning and
        self-development. It is also a great way for employees to get to know their own team and developers.By
        participating in Junction, the working culture in partner companies can shift towards one of more energized,
        rapid innovation.
      </p>
    </Block>
    <Block className={styles.block}>
      <h1>Some of our partners from previous years</h1>
      <p>
        Our partners are a mix of industry leaders and agile startups, looking to support aspiring developers and
        co-create the innovations of tomorrow.
      </p>
      <PartnerSection
        categories={[{ priority: 300, size_md: 4, size_xs: 6 }, { priority: 200, size_md: 3, size_sm: 3, size_xs: 4 }]}
        year="201"
      />
    </Block>
    <Block className={styles.textblock_black}>
      <h1>Case Video</h1>
      <ReactPlayer url="https://www.youtube.com/watch?v=O0WFEAqeg7Y" className={styles.video} />
    </Block>
    <Block className={styles.textblock}>
      <Row>
        <Col xs={12} sm={12} md={8}>
          <h1>
            Interested in partnering<br />with us?
          </h1>
          <p>Henri would be happy to tell you more about partnership opportunities at Junction!</p>
          <h3>Henri Heliö</h3>
          <p>partnerships@hackjunction.com</p>
        </Col>
        <Col xs={10} sm={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-henri.jpg"
            className={styles.img}
            alt="Henri Heliö"
          />
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default AllPartners;
