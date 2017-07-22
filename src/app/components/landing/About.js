import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing.scss';

const About = () =>
  <Grid fluid>
    <Row start="xs" className="junction_about">
      <Col xsOffset={3} xs={9}>
        <h4>ABOUT</h4>
      </Col>
      <Col xsOffset={3} xs={9}>
        <h1>
          A CONVERGENCE OF TECH <br /> & PEOPLE
        </h1>
      </Col>
      <Col xsOffset={3} xs={3}>
        Alii nullo quaerente vultus severitate adsimulata patrimonia sua in
        inmensum extollunt, cultorum ut puta feracium multiplicantes annuos
        fructus, quae a primo ad ultimum solem se abunde iactitant possidere,
        ignorantes profecto maiores suos, per quos ita magnitudo Romana
        porrigitur, non divitiis eluxisse sed per bella saevissima, nec opibus
        nec victu nec indumentorum vilitate gregariis militibus discrepantes
        opposita cuncta superasse virtute.
      </Col>
      <Col xs={6}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6YzH6Zu9cUPIAWxDiZPN7yjwxquaXwCq3318nwgyqmLO97DD" />
      </Col>
      <Col xsOffset={3} xs>
        <div>
          <button className="junction_button junction_border">
            OUR COMMUNITY
          </button>
        </div>
      </Col>
      <Col xsOffset={3} xs={9}>
        <h3>UP NEXT</h3>
      </Col>
      <Col xsOffset={3} xs={9}>
        <Col xs={3}>
          <h3>HUGE EVENT</h3>
        </Col>
        <Col xs={3}>
          <h3>HUGE EVENT</h3>
        </Col>
        <Col xs={3}>
          <h3>HUGE EVENT</h3>
        </Col>
      </Col>
    </Row>
  </Grid>;

export default About;
