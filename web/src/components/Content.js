import React from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

export function Content(/* props */) {
  return (
    <p className="social-links">
      <a href="https://www.meetup.com/Taipei-Ethereum-Meetup/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faCalendar} size="3x" className="meetup"/>
      </a>
      <a href="https://www.facebook.com/groups/taipei.ethereum.meetup/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="fb"/>
      </a>
      <a href="https://twitter.com/eth_taipei" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="3x" className="twitter"/>
      </a>
      <a href="https://medium.com/taipei-ethereum-meetup" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMediumM} size="3x" className="social-medium"/>
      </a>
      <a href="https://github.com/EtherTW" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="3x" className="github" />
      </a>
    </p>
  );
}

Content.propTypes = {
};

export default injectIntl(Content);
