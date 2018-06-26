import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

import styles from './Apply.c.scss';

class Tracks extends Component {
  componentWillMount() {}
  render() {
    return (
      <Scroll.Element name="tracks">
        <Block className={styles.block} contentClassName={styles.block}>
          <Row>
            <Col xs={12} md={6} className={styles.text_section}>
              <BlockHeader className={styles.title} titleStyle={styles.title} title="READY TO START YOUR JUNCTION JOURNEY?">
                {
                  'Winter is coming – and so is Junction 2018! This November Europe’s biggest hackathon will be even bigger and better in Helsinki, Finland. Application period will be announced soon, get ready!'
                }
              </BlockHeader>
              <button
                className={styles.apply_button}
                onClick={() => {
                  var mailchimpConfig = {
                    baseUrl: 'mc.us15.list-manage.com',
                    uuid: '6dd99fd74845dfb3f1307127a',
                    lid: '292fbaaccd'
                  };
                  // No edits below this line are required
                  var chimpPopup = document.createElement('script');
                  chimpPopup.appendChild(
                    document.createTextNode(
                      'require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +
                        mailchimpConfig.baseUrl +
                        '", "uuid": "' +
                        mailchimpConfig.uuid +
                        '", "lid": "' +
                        mailchimpConfig.lid +
                        '"})});document.cookie = "MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";'
                    )
                  );
                  //alert(chimpPopup);

                  document.body.appendChild(chimpPopup);
                }}
              >
                {'GET THE LATEST UPDATES'}
              </button>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{
                'background-image':
                  'url(https://staging.hackjunction.com/wp-content/uploads/2018/06/junction2018_website_hands-01.svg)',
                'background-size': 'auto 100%',
                'background-repeat': 'no-repeat'
              }}
            />
          </Row>
        </Block>
      </Scroll.Element>
    );

  }
}

Tracks.propTypes = {};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(Tracks);
