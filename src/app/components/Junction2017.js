import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './Junction2017.c.scss';
import Block from './viewBlocks/Block';
import TopNav from './TopNav';
import TitleMod from './TitleMod';
import Footer from './landing/Footer';
import ElementGrid from './common/ElementGrid';
import ElementGridElement from './common/ElementGridElement';
import BlockHeader from './viewBlocks/BlockHeader';

const Junction2017 = () => (
  <div>
    <TopNav />
    <TitleMod
      title="JUNCTION 2017"
      content={[
        'Junction 2017 was a blast! Altogether 1500 participant from 90 different nationalities gathered to Aalto University’s main building Dipoli during the cold and slushy November in Finland. Based on the feedback we gathered from you guys, the best parts of Junction still remained the same: the unique atmosphere, sharing your passion with 1499 other people. Also the almighty Junction Midnight Karaoke. Throughout the weekend we saw some crazy project ideas with impressive outcomes. You can see every track winner down below – we hope you find them as interesting as we do!'
      ]}
    />
    <Block className={styles.block} contentClassName={null}>
      <BlockHeader title="WINNERS OF JUNCTION 2017" />
      <ElementGrid
        grid={[[12], [4, 4, 4], [6, 6], [4, 4, 4], [6, 6], [4, 4, 4]]}
        elements={[
          {
            title: 'WINNER OF JUNCTION 2017',
            team: 'GLADOS',
            link: 'https://devpost.com/software/glados',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/09/big_data.jpg'
          },
          {
            title: 'ENTERTAINMENT TRACK WINNER',
            team: 'SPOTIFY CROWD',
            link: 'https://devpost.com/software/spotify-crowd',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/entertainment.jpg'
          },
          {
            title: 'GAME JAM WINNER',
            team: 'DISCO MELTHEM',
            link: 'https://devpost.com/software/discomelthem',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/game_jam.jpg'
          },
          {
            title: 'LOGISTICS TRACK WINNER',
            team: 'FLEETBOARD CRYPTOTRUCK',
            link: 'https://devpost.com/software/fleetboard-cryptotruck',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/logistics.jpg'
          },
          {
            title: 'ARTIFICIAL INTELLIGENCE TRACK WINNER',
            team: 'AD VENTURE',
            link: 'https://devpost.com/software/ad-venture',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/09/artificial_intelligence.jpg'
          },
          {
            title: 'FINTECH TRACK WINNER',
            team: 'KOMPIS',
            link: 'https://devpost.com/software/kompis',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/fintech.jpg'
          },
          {
            title: 'INTELLIGENT BUILDINGS TRACK WINNER',
            team: 'SÄHKÖDINO',
            link: 'https://devpost.com/software/sahkodino',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/intelligent_buildings.jpg'
          },
          {
            title: 'LEGALTECH TRACK WINNER',
            team: 'DISCOVER',
            link: 'https://devpost.com/software/discover-dn430a',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/10/legal.jpg'
          },
          {
            title: 'HEALTHTECH TRACK WINNER',
            team: 'NE’E',
            link: 'https://devpost.com/software/ne-e',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/healthtech.jpg'
          },
          {
            title: 'PRODUCTIVITY TRACK WINNER',
            team: 'DUUNITIN',
            link: 'https://devpost.com/software/pat-reboot-your-career',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/10/productivity-1.jpg'
          },
          {
            title: 'SPACE TRACK WINNER',
            team: 'BIOPLANNER',
            link: 'https://devpost.com/software/bioplanner',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/10/space.png'
          },
          {
            title: 'INDUSTRIAL INTERNET TRACK WINNER',
            team: 'ECO-MPERE',
            link: 'https://devpost.com/software/eco-mpere',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/industrial_internet.jpg'
          },
          {
            title: 'BIG DATA TRACK WINNER',
            team: 'SMART CITY MAINTENANCE',
            link: 'https://devpost.com/software/polku',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/09/big_data.jpg'
          },
          {
            title: 'MOBILITY TRACK WINNER',
            team: 'SAFETYFIRST',
            link: 'https://devpost.com/software/safetyfirst-lfb47g',
            background: 'https://staging.hackjunction.com/wp-content/uploads/2017/08/multimodal_mobility.jpg'
          }
        ].map(winner => {
          return (
            <ElementGridElement
              link={winner.link}
              content={
                <div>
                  <h3>{winner.title}</h3>
                  <h2>{winner.team}</h2>
                </div>
              }
              background={winner.background}
              outside
            />
          );
        })}
      />
      <Row>
        <Col xs={12} md={4}>
          <a href="https://junction2017.devpost.com/">
            <button className={`${styles.apply_button} ${styles.apply_button_fullwidth}`}>
              MORE PROJECTS FROM<br />2017
            </button>
          </a>
        </Col>
        <Col xs={12} md={4}>
          <a href="/partners">
            <button className={`${styles.apply_button} ${styles.apply_button_fullwidth}`}>
              SEE PARTNERS FROM<br />2017
            </button>
          </a>
        </Col>
        <Col xs={12} md={4}>
          <a href="/all-tracks">
            <button className={`${styles.apply_button} ${styles.apply_button_fullwidth}`}>
              SEE TRACKS FROM<br />2017
            </button>
          </a>
        </Col>
      </Row>
    </Block>
    <Block className={styles.block_dark}>
      <BlockHeader title="PHOTOS FROM LAST YEAR" />
      <Row className={styles.imagerow}>
        <Col xs={12} md={12}>
          <img src="https://farm5.staticflickr.com/4555/38092639235_3bd70878b9_o_d.jpg" className="responsive" alt="" />
        </Col>
      </Row>
      <Row className={styles.imagerow}>
        <Col xs={6} md={6}>
          <img src="https://farm5.staticflickr.com/4685/38263127614_4ff826425d_k_d.jpg" className="responsive" alt="" />
        </Col>
        <Col xs={6} md={6}>
          <img src="https://farm5.staticflickr.com/4582/38092639625_dbf88e1147_k_d.jpg" className="responsive" alt="" />
        </Col>
      </Row>
      <Row className={styles.button_row}>
        <Col xs={12} md={12}>
          <a href="https://www.flickr.com/photos/151708924@N07/albums/72157661484062787">
            <button className={`${styles.apply_button} ${styles.apply_button_light}`}> MORE PHOTOS</button>
          </a>
        </Col>
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Junction2017;
