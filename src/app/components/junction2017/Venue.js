import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './Venue.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

const Venue = () => (
  <Block className={styles.block} contentClassName={styles.content}>
    <Row>
      <Col xs={12} className="bold text-secondary">
        <h4>VENUE</h4>
      </Col>
    </Row>
    <BlockHeader title="BACK TO THE ROOTS" />
    <Row>
      <Col xs={12}>
        <p>
          Junction is meant to be seen, heard and most importantly felt. This year, we’re taking Junction back to its
          roots to Espoo and creating a new world of hackathons inside Aalto University’s newly renovated main building,
          Dipoli. Like the years before, our unique venue designs guarantee an extraordinary experience for everyone
          stepping inside Junction.
        </p>
      </Col>
    </Row>
    <Row>
      <h4>ADDRESS</h4>
      <p>
        <ul>
          <li>Dipoli</li>
          <li>Otakaari 24</li>
          <li>Otaniemi</li>
          <li>02150 Espoo, Finland</li>
        </ul>
      </p>
    </Row>
    <Row>
      <h4>ARRIVING BY PLANE</h4>
      <p>
        From Helsinki Airport take Trains I or P towards Helsinki. At the last stop, the Central Railway Station, exit
        the building. You can then walk a block to Kamppi Shopping Center from which you can take bus 102(T) or 103(T)
        towards Otaniemi. Get off at the “Alvar Aallon puisto” buss stop and walk to the end of Otakaari. Then walk
        towards a big dark gray building, Dipoli. We have setup Junction-signs for you – you won’t miss us! 😉
      </p>
    </Row>
    <Row>
      <h4>FROM CITY CENTER</h4>
      <p>
        You can take the metro from Helsinki to Otaniemi station and walk to Dipoli, which is near by the station. We
        will have signs to guide you in the right direction. Also buses 102(T) or 103(T) towards Otaniemi can be taken
        from Kamppi Shopping Center almost directly to the venue. Get off at the Alvar Aallon puisto bus stop and walk
        to the end of Otakaari and then towards a big dark gray building, Dipoli.
      </p>
    </Row>
    <Row>
      <h4>ARRIVING BY BUS</h4>
      <p>
        Buses will be traveling directly to Junction from Oulu and St. Petersburg. For confirmed participants from these
        cities more information will be sent soon.
      </p>
    </Row>
    <Row>
      <h4>REGISTRATION</h4>
      <p>
        The doors to the venue and registration open at 17:00. However you will be able to register throughout the day
        on Friday already at Terminal 2 in Helsinki Airport.
      </p>
    </Row>
    <Row>
      <h4>PARKING</h4>
      <p>
        The venue does not have designated parking. There are some parking areas around Otaniemi but it’s more reliable
        to arrive by using public transport.
      </p>
    </Row>
  </Block>
);

export default Venue;
