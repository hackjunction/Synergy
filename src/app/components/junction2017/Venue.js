import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from "./Venue.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const Venue = () =>

    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>VENUE</h4>
        </Col>
      </Row>
      <BlockHeader title="HAVE YOU EVER HACKED IN A BUNKER?" />
      <Row>
        <Col xs={12}>
        <p>
          One thing is guaranteed with Junction and that is not being bored, ever.
          This year we take our venue one step further where we are going to be
          hacking in an underground bunker. Does it get better than that?
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
            From Helsinki Airport take Trains I or P towards Helsinki.
            At the last stop, the Central Railway Station, exit the building.
            You can then walk a block to Kamppi Shopping Center from which you
            can take bus 102(T) or 103(T) towards Otaniemi. Get off at the
            “Alvar Aallon puisto” buss stop and walk to the end of Otakaari.
            Then walk towards a big dark gray building, Dipoli.
            We have setup Junction-signs for you – you won’t miss us! 😉
          </p>
      </Row>
      <Row>
        <h4>FROM CITY CENTER</h4>
          <p>
            Buses 102(T) or 103(T) towards Otaniemi can be taken from Kamppi
            Shopping Center almost directly to the venue. Get off at the Alvar
            Aallon puisto buss stop and walk to the end of Otakaari and then
            towards a big dark gray building, Dipoli.
          </p>
      </Row>
      <Row>
        <h4>ARRIVING BY BUS</h4>
          <p>
            Buses will be traveling directly to Junction from Oulu and
            St. Petersburg. For confirmed participants from these
            cities more information will be sent soon.
          </p>
      </Row>
      <Row>
        <h4>REGISTRATION</h4>
          <p>
            The doors to the venue and registration open at 17:00.
            However you will be able to register throughout the day
            on Friday already at Terminal 2 in Helsinki Airport.
          </p>
      </Row>
      <Row>
        <h4>PARKING</h4>
          <p>
            The venue does not have designated parking. There are some
            parking areas around Otaniemi but it’s more reliable to
            arrive by using public transport.
          </p>
      </Row>

    </Block>
    ;

export default Venue;
