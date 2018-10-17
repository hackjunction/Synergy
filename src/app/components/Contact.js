import React from 'react';
import { Row } from 'react-flexbox-grid';
import styles from './Contact.c.scss';
import Block from './viewBlocks/Block';
import TopNav from './TopNav';
import TitleMod from './TitleMod';
import Footer from './landing/Footer';
import ContactCard from './ContactCard';

const Contact = () => (
  <div>
    <TitleMod
      title="THE TEAM"
      content={['Drop us a line at', 'hello(at)hackjunction.com']}
      image="https://staging.hackjunction.com/wp-content/uploads/2018/04/tiimikuva2017.jpg"
      header={<TopNav />}
    />
    <Block className={styles.block} contentClassName={null}>
      <Row>
        <ContactCard
          name="Iiro Nurmi"
          email="iiro.nurmi(at)hackjunction.com"
          title="Director"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-iiro.jpg"
        />
        <ContactCard
          name="Aleksi Heinonen"
          email="aleksi.heinonen(at)hackjunction.com"
          title="Operations"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-aleksi.jpg"
        />
        <ContactCard
          name="Henri Heliö"
          email="partnerships(at)hackjunction.com"
          title="Partnerships"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-henri.jpg"
        />
        <ContactCard
          name="Anna Brchisky"
          email="anna.brchisky(at)hackjunction.com"
          title="Marketing & Communications"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-anna.jpg"
        />
        <ContactCard
          name="Antti Hämmäinen"
          email="antti.hammainen(at)hackjunction.com"
          title="Global, JUNCTIONx"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-antti.jpg"
        />
        <ContactCard
          name="Suvi Majander"
          email="suvi.majander(at)hackjunction.com"
          title="Design & Brand"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-suvi2.jpg"
        />
        <ContactCard
          name="Teemu Lemetti"
          email="teemu.lemetti(at)hackjunction.com"
          title="Finance"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-teemu.jpg"
        />
        <ContactCard
          name="Martta Jämsén"
          email="martta.jamsen(at)hackjunction.com"
          title="Junction Main Event 2018"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-martta.jpg"
        />
        <ContactCard
          name="Erika Ojanperä"
          email="erika.ojanpera(at)hackjunction.com"
          title="Participants"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-erika.jpg"
        />
        <ContactCard
          name="Henrik Aarnio"
          email="henrik.aarnio(at)hackjunction.com"
          title="Tech"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-henrik.jpg"
        />
        <ContactCard
          name="Juuso Lappalainen"
          email="juuso.lappalainen(at)hackjunction.com"
          title="Program"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-juuso.jpg"
        />
        <ContactCard
          name="Patrik Holopainen"
          email="patrik.holopainen(at)hackjunction.com"
          title="Reviewing"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/04/junction18team-patrik.jpg"
        />
        <ContactCard
          name="Jenna Kallunki"
          email="hello(at)hackjunction.com"
          title="Volunteers"
          image="https://staging.hackjunction.com/wp-content/uploads/2018/10/jenna.jpg"
        />
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Contact;
