import React from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

export function Content(/* props */) {
  return (
    <p className="App-intro">
      FB | Twitter logo (with link).
    </p>
  );
}

Content.propTypes = {
};

export default injectIntl(Content);
