import { withRouter } from 'next/router';
import React from 'react';

const Btn = ({
  href, onClick, children, router,
}) => (
  <span>
    <button
      onClick={onClick}
      style={{
        fontWeight:
              router.pathname === href ? 'bold' : '',
      }}
    >
      {children}
    </button>
  </span>
);

export default withRouter(Btn);
