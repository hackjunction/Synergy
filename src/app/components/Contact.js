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
    <Block>
      {
        'We are Junction – a volunteer-lead community effort around the world. Our headquarters is located at Startup Sauna in Finland but the whole Junction team spreads out to several different places, world-wide. The thing that keeps us together? Passion for empowering people to create with technology. Join us!'
      }
    </Block>
    <Block className={styles.block} contentClassName={null}>
      <Row>
        <ContactCard name="Iiro Nurmi" email="iiro.nurmi(at)hackjunction.com" title="Director" image="" />
        <ContactCard
          name="Patrik Holopainen"
          email="patrik.holopainen(at)hackjunction.com"
          title="Operations"
          image=""
        />
        <ContactCard name="Henri Heliö" email="henri.helio(at)hackjunction.com" title="CSO" image="" />
        <ContactCard name="Maiju Aspegren" email="partnerships(at)hackjunction.com" title="Partnerships" image="" />
        <ContactCard
          name="Silvia Geier"
          email="silvia.geier(at)hackjunction.com"
          title="Marketing & Communications"
          image=""
        />
        <ContactCard name="Minea Erviö" email="minea.ervio(at)hackjunction.com" title="Global, JUNCTIONx" image="" />
        <ContactCard
          name="Julia Ehrnrooth"
          email="julia.ehrnrooth(at)hackjunction.com"
          title="Brand & Design"
          image=""
        />
        <ContactCard name="Teemu Lemetti" email="teemu.lemetti(at)hackjunction.com" title="Finance" image="" />
        <ContactCard
          name="Martta Jämsén"
          email="martta.jamsen(at)hackjunction.com"
          title="Junction Main Event 2019"
          image=""
        />
        <ContactCard name="Juuso Lappalainen" email="juuso.lappalainen(at)hackjunction.com" title="CTO" image="" />
        <ContactCard name="Kasper Henriksson" email="kasper.henriksson(at)hackjunction.com" title="Hel Tech" image="" />
      </Row>
    </Block>
    <Footer />
  </div>
);

export default Contact;
