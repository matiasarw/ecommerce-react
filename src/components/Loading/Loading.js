import React from 'react';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => {
  return <BarLoader css={override} />;
};

export default Loading;
