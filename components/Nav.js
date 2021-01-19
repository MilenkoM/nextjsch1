import Link from 'next/link';
import React from 'react';
import Btn from './Button';

export default () => (
  <div>
    <Link href="/" passHref><Btn>Index</Btn></Link>
    <Link href="/second" passHref><Btn>Second</Btn></Link>
    <Link href="/third" passHref><Btn>Third</Btn></Link>
  </div>
);
