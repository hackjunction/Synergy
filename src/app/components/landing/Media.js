import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './landing.scss';

const Media = () =>
  <Grid fluid>
    <Row start="xs" className="junction_media">
      <Col xsOffset={1} xs={9} className="bold text-secondary">
        <h4>MEDIA</h4>
      </Col>
      <Col xsOffset={1} xs={5}>
        <h1 className="text-underline">
          STAY UP TO DATE <br /> WITH US
        </h1>
      </Col>
      <Col xsOffset={1} xs={6}>
        Alii nullo quaerente vultus severitate adsimulata patrimonia sua in
        inmensum extollunt, cultorum ut puta feracium multiplicantes annuos
        fructus, quae a primo ad ultimum solem se abunde iactitant possidere,
        ignorantes profecto maiores suos, per quos ita magnitudo Romana
        porrigitur, non divitiis eluxisse sed per bella saevissima, nec opibus
        nec victu nec indumentorum vilitate gregariis militibus discrepantes
        opposita cuncta superasse virtute.
      </Col>
      <Row>
        <Col xsOffset={2} xs={9}>
          <Col xs={4}>
            <img src="http://loremflickr.com/320/240" />
            <h3>AMAZING POST</h3>
            <p>This is a very nice and short description that is really a clickbait...</p>
          </Col>
          <Col xs={4}>
            <img src="http://loremflickr.com/320/240" />
            <h3>AMAZING POST</h3>
            <p>This is a very nice and short description that is really a clickbait...</p>
          </Col>
          <Col xs={4}>
            <img src="http://loremflickr.com/320/240" />
            <h3>AMAZING POST</h3>
            <p>This is a very nice and short description that is really a clickbait...</p>
          </Col>
        </Col>
      </Row>
      <Col xsOffset={5} xs={6}>
        <div>
          <button className="junction_button junction_border">SEE ALL</button>
        </div>
      </Col>
    </Row>
  </Grid>;

export default Media;
