import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import ElementGrid from '../common/ElementGrid';
import NewsElement from '../common/NewsElement';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

import styles from './Stories.c.scss';

class Stories extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    //this.props.dispatch({ type: 'GET_TRACKS' });
  }
  render() {
    var stories = [
      {
        link: 'https://www.hs.fi/teknologia/art-2000005464266.html',
        image: 'https://staging.hackjunction.com/wp-content/uploads/2018/06/Junction18-medialogos-02.png'
      },
      {
        link: 'https://www.huffingtonpost.com/erica-swallow/in-finland_b_8570578.html',
        image: 'https://staging.hackjunction.com/wp-content/uploads/2018/06/Junction18-medialogos-05.png'
      },
      {
        link: 'https://www.kauppalehti.fi/uutiset/uutinen/SisaMTJe',
        image: 'https://staging.hackjunction.com/wp-content/uploads/2018/06/Junction18-medialogos-04.png'
      },
      {
        link:
          'https://www.tivi.fi/Kaikki_uutiset/maailman-suurin-hackathon-suomessa-1500-huippukoodaria-espoossa-6689191',
        image: 'https://staging.hackjunction.com/wp-content/uploads/2018/06/Junction18-medialogos-03.png'
      },
      {
        link:
          'https://nordic.businessinsider.com/finland-has-hackathons-for-everything--from-cultural-heritage-to-state-run-railway-operators-2016-12/',
        image: 'https://staging.hackjunction.com/wp-content/uploads/2018/06/Junction18-medialogos-01.png'
      }
    ];

    return (
      <Scroll.Element name="tracks">
        <Block className={styles.block}>
          <BlockHeader title="STORIES ABOUT US" />
          <ElementGrid
            grid={[[6, 6], [4, 4, 4]]}
            elements={stories.map((story, i) => <NewsElement key={i} post={story} />)}
          />
        </Block>
      </Scroll.Element>
    );
  }
}

Stories.propTypes = {};

// export the connected class
function mapStateToProps() {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(Stories);
