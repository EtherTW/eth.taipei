import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import SectionHeader from './SectionHeader';
import { Button } from 'reactstrap';
import Logo from './assets/logo.png';

export function Block(props) {
  const {
    intl,
  } = props;
  return (
    <SectionHeader>
      <img
        className="align-middle d-inline-block"
        src={Logo}
        width="100"
        alt="Taipei Ethereum Meetup Logo"
        style={{
          marginBottom: '24px',
        }}
      />
      <h2>{intl.formatMessage({ id: 'eventTitle' })}</h2>
      <p>{intl.formatMessage({ id: 'eventDescription' })}</p>
      <Button href="https://www.facebook.com/eth.taipei/" target="_blank" rel="noopener noreferrer" color="primary" size="lg">{intl.formatMessage({ id: 'Join' })}</Button>
    </SectionHeader>
  );
}

Block.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Block);
