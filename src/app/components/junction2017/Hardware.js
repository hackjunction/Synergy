import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styles from "./Venue.c.scss";
import Block from "../viewBlocks/Block";
import BlockHeader from "../viewBlocks/BlockHeader";

const Venue = () =>

  (<Block className={styles.block} contentClassName={styles.content}>
    <Row>
      <Col xs={12} className="bold text-secondary">
        <h4>HARDWARE</h4>
      </Col>
    </Row>
    <BlockHeader title="COOLEST HARDWARE TO HACK ON" />
    <Row>
      <Col xs={12}>
        <p>
          We will provide the hackers the latest and greatest gadgets from
          the tech world. Our partners want to offer you a good deal of
          different technologies to play with. The table will be updated as
          more devices are confirmed. Hardware can be reserved through our
          HW Lab reservation platform!
        </p>
        <p>
          In addition to what is seen here, we will have soldering equipments,
          scopes and passive components from Microsoft Flux and student group
          Elepaja. 3D printers will be also supplied. Let us know what else
          you’d like to see at Junction to hardware@hackjunction.com and
          we’ll do our best to provide that for you!
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h4>XR</h4>
      </Col>
      <p>
        <ul>
          <li>Leap Motions</li>
          <li>HTC Vive Room-scale</li>
          <li>HTC Vive Desk-scale</li>
          <li>Samsung Gear VR (MLH)</li>
          <li>Oculus Rift CV1 (MLH)</li>
          <li>Kinect V2</li>
          <li>Snapchat Spectacles</li>
          <li>Microsoft Hololens (Trimble)</li>
          <li>Microsoft Hololens (Outotec)</li>
          <li>Vuzix M300 Smart glasses (Outotec)</li>
        </ul>
      </p>
    </Row>
    <Row>
      <Col xs={12}>
        <h4>MICROCONTROLLERS / SHIELDS</h4>
      </Col>
      <p>
        <ul>
          <li>NodeMcu</li>
          <li>Arduino Uno</li>
          <li>Arduino Nano</li>
          <li>Arduino 101 (MLH)</li>
          <li>Raspberry Pi’s (The Qt Company)</li>
          <li>Lilypad ATmega32U4</li>
          <li>Arrow Dragonboard 410c</li>
          <li>BeagleBoard PocketBeagle</li>
          <li>Intel Starter Kit Component (MLH)</li>
          <li>Base Shield (MLH)</li>
        </ul>
      </p>
    </Row>
    <Row>
      <p>
        <ul>
          <li>Bluetooth Shield</li>
          <li>Raspberry Pi Camera</li>
          <li>StepStick stepper driver</li>
          <li>LCD-displays</li>
          <li>Raspberry Pi 7” TouchScreen Display</li>
          <li>2,4 Ghz RF transceiver</li>
          <li>NFC Reader / Writer</li>
          <li>Sparkfun Weather Shield (Microsoft Flux)</li>
        </ul>
      </p>
    </Row>
    <Row>
      <Col xs={12}>
        <h4>SENSORS</h4>
      </Col>
      <p>
        <ul>
          <li>Infrared Grid-EYE Array Sensor (Panasonic AMG8832EK)</li>
          <li>CCS CCS811 Evaluation kit</li>
          <li>STMICRO STEVAL-WESU1</li>
          <li>DHT22 Temperature / Humidity Sensors</li>
          <li>Gyroscope / Accelerometer Sensors</li>
          <li>Different LilyPad modules</li>
          <li>Photosensitive Sensors</li>
          <li>Infrared Motion Sensors</li>
          <li>Pulse Heart Rate Sensors</li>
          <li>Capacitive Touch Sensors</li>
          <li>Muse Headbands</li>
          <li>Movesense Sensors (Suunto)</li>
          <li>Light Intensity Sensors (Helvar)</li>
          <li>Passive Infrared (PIR) sensors (Helvar)</li>
          <li>Moodmetric Smart Rings (Helvar)</li>
          <li>Flir Lepton Infrared Camera (Helvar)</li>
          <li>Grove Kit Component (MLH)</li>
          <li>Myo Armband (MLH)</li>
          <li>RuuviTag (Ruuvi)</li>
        </ul>
      </p>
    </Row>
    <Row>
      <Col xs={12}>
        <h4>OTHER</h4>
      </Col>
      <p>
        <ul>
          <li>Amazon Echo</li>
          <li>Amazon Echo Dots</li>
          <li>Dual Shock Controllers</li>
          <li>DC / Stepper Motors</li>
          <li>Web Cameras</li>
          <li>PC Screens</li>
          <li>Smart TVs (Elisa)</li>
          <li>Game Consoles (Elisa)</li>
          <li>Mobile Devices (Elisa)</li>
          <li>Planmeca Sovereign Dental Care Unit (Planmeca)</li>
          <li>Planmeca ProFace 3D Camera (Planmeca)</li>
          <li>Planmeca 3D Intraoral Scanner (Plancema)</li>
          <li>Amazon Fire Phone (MLH)</li>
          <li>Dell XPS 13 (MLH)</li>
          <li>Pebble Time (MLH)</li>
          <li>RFID readers and other accessories (Finn-ID)</li>
          <li>Android Smartphone (Finn-ID)</li>
          <li>Honeywell mobile devices (Finn-ID)</li>
          <li>RFID readers, tags and antennas (Stora Enso)</li>
          <li>Eve V tablet (Eve Tech)</li>
        </ul>
      </p>
    </Row>
  </Block>)
    ;

export default Venue;
