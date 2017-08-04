import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing.scss';

const Hacktalks = () =>
  <Grid fluid>
    <Row start="xs" className="junction_hacktalks">
      <Col xsOffset={3} xs={9}>
        <h4>HACK/TALKS</h4>
      </Col>
      <Col xsOffset={3} xs={4}>
        <h1 className="text-underline text-title-bold">
          KEYNOTES ON THE <br /> EDGE OF TECH
        </h1>
      </Col>
      <Col xsOffset={3} xs={6}>
        Alii nullo quaerente vultus severitate adsimulata patrimonia sua in
        inmensum extollunt, cultorum ut puta feracium multiplicantes annuos
        fructus, quae a primo ad ultimum solem se abunde iactitant possidere,
        ignorantes profecto maiores suos, per quos ita magnitudo Romana
        porrigitur, non divitiis eluxisse sed per bella saevissima, nec opibus
        nec victu nec indumentorum vilitate gregariis militibus discrepantes
        opposita cuncta superasse virtute.
      </Col>
      <Col xsOffset={3} xs={6}>
        <Col xs={6}>
          <div className="card">
            <img src="http://loremflickr.com/320/240" />
            <div className="container">
              <h1>John Doe</h1>
              <p className="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div className="card">
            <img src="http://loremflickr.com/320/240" />
            <div className="container">
              <h1>John Doe</h1>
              <p className="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  </Grid>;

export default Hacktalks;
