import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const Footer = () => (
  <div style={style}>
    Powered by
    <a
      href="https://www.coindesk.com/price/"
      target="_blank"
      rel="noopener noreferrer"
    >
      &nbsp;CoinDesk
    </a>
  </div>
);

export default Footer;
