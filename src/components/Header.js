import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import {
  logo, logoAltText, headerHeight, logoLink,
} from '../config';
import Controls from './Controls';

function Header({
  className,
}) {
  const { pathname } = useLocation();
  const { connected, loading } = useSelector(({ sm }) => ({ ...sm }));
  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              {/* left align */}
              <Link to={logoLink}>
                <img src={logo} className="logo position-relative" alt={logoAltText} />
              </Link>
            </div>
            <div>
              {/* middle align */}
            </div>
            <div>
              {/* right align */}
              <div className={`${connected && !loading && pathname === '/video' ? '' : 'd-none'}`}>
                <Controls />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Header)`
  position: relative;
  z-index: 20;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 5px 20px;
  border-bottom: 1px solid gray;

  &>.row {
    height: ${headerHeight};
  }
  .logo {
    margin-top: 0px;

    /* height constrain logo image */
    // height: calc(0.4 * ${headerHeight});
    // width: auto;
    height: auto;
    max-width: 30vw;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      height: calc(0.8 * ${headerHeight});
   }
  }
`;
