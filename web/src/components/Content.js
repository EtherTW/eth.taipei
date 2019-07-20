import React from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

export function Content(/* props */) {
  return (
    <p className="social-links">
      <a href="https://www.facebook.com/groups/taipei.ethereum.meetup/">
        <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="fb"/>
      </a>
      <a href="https://twitter.com/eth_taipei">
        <FontAwesomeIcon icon={faTwitter} size="3x" className="twitter"/>
      </a>
    </p>
  );
}

Content.propTypes = {
};

export default injectIntl(Content);
