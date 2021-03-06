import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import styles from './Participate.c.scss';
import Block from './viewBlocks/Block';
import BlockHeader from './viewBlocks/BlockHeader';
import CalendarGrid from './CalendarGrid';
import TopNav from './TopNav';
import Slideshow from './Slideshow';
import Footer from './landing/Footer';

const Participate = () => (
  <div>
    <TopNav />
    <Slideshow
      elements={[
        {
          index: '0',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/09/helmikorhonen_friday14.jpg',
          quote: '“Thank you for the event, this has become my must do every year now!”',
          quoter: ' -Main event 2017'
        },
        {
          index: '1',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/09/Copy-of-LAUANTAI-AINO-0887.jpg',
          quote: "“LOVED IT! Please don't make us wait a whole year for the next one!”",
          quoter: ''
        },
        {
          index: '2',
          image: 'https://staging.hackjunction.com/wp-content/uploads/2018/09/Copy-of-LAUANTAI-AINO-0978.jpg',
          quote:
            '“I was absolutely amazed at how well Junction was organized. It was my first hackathon and now I am definitely hooked!”',
          quoter: ' -Main event 2017'
        }
      ]}
    />
    <Block className={styles.greenBlock}>
      <h1 className={styles.applyHeader}>JUNCTION 2018 APPLICATIONS ARE CLOSED</h1>
      <a href="https://2018.hackjunction.com" className={styles.applyLink}>
        <div className={styles.apply}>
          <h2 className={styles.apply2}>Learn more about Junction 2018</h2>
        </div>
      </a>
    </Block>
    <Block className={styles.dark_block}>
      <BlockHeader title="HOW TO PARTICIPATE IN JUNCTION?" />
      <p>
        {
          'Junction organizes coding and other technical events around the year in Finland and abroad. We have something for every skill set and interest, so do not hesitate to explore and get new experiences by participating in Junction-events!'
        }
      </p>
      <p>
        {
          'If you’re starting your coding journey, check out our beginner workshops and annual Stupid Hack, where only ideas and excitement matter! For someone who wants to really test their skills, we have several technical events during the fall around Europe: TechRace and HackTour. If you want to try out a hackathon, why not test our our community organized JUNCTIONx-hackathons (which are pretty awesome!).'
        }
      </p>
      <p>
        {
          'We always end our year with our annual main event, this year called Junction 2018! If you’re into tech at all, this is the one place you need to experience in your life – full weekend of hacking with 1500 others in an awesome venue and atmosphere like no other. Applications open on August 20th!'
        }
      </p>
    </Block>
    <Block className={styles.block} contentClassName={styles.block}>
      <Row>
        <Col xs={12} md={8} className={styles.text_section}>
          <BlockHeader className={styles.title} titleStyle={styles.title} title="READY TO START YOUR JUNCTION JOURNEY?">
            <p>
              {
                'Junction 2018, Junction’s annual main event will be held on November 23–25th this year in the greater Helsinki-area, Finland! The venue will be filled with 1500 developers, designers and  tech-enthuasistas for the weekend, who all want to create something new and impactful. Whether you’re a coding wizard, eat designs for breakfast or a business-minded hustler, Junction 2018 is the place for you!'
              }
            </p>
            <p>
              {
                'In Junction 2018 we have several tracks or “themes” for you to choose from – all challenges will, well, challenge you to put your skills in to use and to learn something new with your team. You can apply either with a ready team for Junction 2018, or build a team once you’re chosen to participate – either way, there will be people supporting your work in your team and by the partners. Every partner will provide you with a challenge and several mentors to answer even the trickiest questions by you. Check out our partners for the year '
              }
              <Link to="/partners">here!</Link>
            </p>
            <p>Applications for Junction 2018 are closed!</p>
          </BlockHeader>
        </Col>
        <Col
          xs={12}
          md={4}
          style={{
            'background-image':
              'url(https://staging.hackjunction.com/wp-content/uploads/2018/06/junction2018_website_blob-01-02.png)',
            'background-size': 'contain',
            'background-repeat': 'no-repeat'
          }}
        />
      </Row>
    </Block>
    <Block className={styles.dark_block}>
      <BlockHeader title="NEXT UP" className={styles.community} />
      <Col>
        <CalendarGrid categories={{ hacktour: true, junctionx: true, techrace: true, hacktalks: true }} limit={3} />
      </Col>
      <Row center="xs">
        <Col xs={12} md={12}>
          <Link to="/calendar">
            <button className={styles.apply_button}>SEE FULL CALENDAR</button>
          </Link>
        </Col>
      </Row>
    </Block>

    <Block className={styles.block}>
      <BlockHeader title="MATCHMAKING AT JUNCTION" className={styles.community} />
      <p>
        We want to give you the best possible experience at Junction 2018. That’s why this year we are bringing over 30
        of the top tech firms from various fields along with their experts to Junction! The weekend itself is an
        excellent opportunity to get to know the tech people at these companies and explore new opportunities with or in
        these companies. You can find out more information about our partners and their challenges in our track specific
        pages!
      </p>
      <p>
        Based on our feedback last year, 80% of participants were interested in exploring job opportunities at Junction.
        This is why we have partnered again with aTalent in Junction 2018 – to bring you interesting and relevant open
        positions from the fields of technology and design. We know hackathons and aTalent knows talent.
      </p>
      <p>
        Hailing from the same ecosystem at Aalto University and still fully owned by student and alumni organizations,
        aTalent is a recruitment company connecting skilled students and young professionals with the right companies.
        We chose aTalent as our recruitment partner because they are committed to helping bright talents build their
        career and treat applicants as valued customers.
      </p>
      <p>
        During Junction 2018, aTalent will facilitate the Meeting Area alongside the Junction team. We are happy to
        answer any questions you might have on recruitment and career-related topics! Contact us regarding matchmaking
        or any other topic at hello@hackjunction.com and see the open job listings of our partners even before the event
        at hackjunction.com/jobs
      </p>
      <a href="https://atalent.fi/en/who-are-we">
        <button className={`${styles.apply_button}`}>LEARN MORE ABOUT aTALENT</button>
      </a>
    </Block>

    <Block className={styles.block}>
      <Row>
        <Col xs={12} sm={12} md={8}>
          <h1>
            Have questions about<br />participating in Junction events?
          </h1>
          <p>Contact our team member responsible for participants</p>
          <h3>Erika Ojanperä</h3>
          <p>erika.ojanpera@hackjunction.com</p>
        </Col>
        <Col xs={10} sm={6} md={4}>
          <img
            src="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-erika.jpg"
            className={styles.img}
            alt="Erika Ojanperä"
          />
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Participate;
