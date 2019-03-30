import React from 'react';
import SW from './Landing.swiss.js';

export default function Landing() {
  return (
    <SW.Wrapper>
      <SW.Row>Name: Petar Dyakov, a.k.a Decho</SW.Row>
      <SW.Row>Age: 23</SW.Row>
      <SW.Row>
        From: Sofia,{' '}
        <SW.Span role="img" aria-label="Bulgarian flag">
          🇧🇬
        </SW.Span>
      </SW.Row>
      <SW.Row>
        Current job: Chief Consistency Officer
        <SW.Link href="https://www.swipesapp.com">@swipesapp</SW.Link>
      </SW.Row>
      <SW.Row>
        Currently working on: This place, Dojohunt -> (Platform for finding gyms
        in Sofia), <SW.Link href="http://we-are.cc">we-are.cc</SW.Link>
      </SW.Row>
      <SW.Row>
        Have worked on:{' '}
        <SW.Link href="https://www.swipesapp.com">swipesapp.com</SW.Link>,
        <SW.Link href="https://jd.dk">jd.dk</SW.Link>,
        <SW.Link href="https://legalpad.io">legalpad.io</SW.Link>
      </SW.Row>
      <SW.Row>
        Can be reached here:
        <SW.Link href="mailto:petar.dyakov@icloud.com">Email</SW.Link>,
        <SW.Link href="https://twitter.com/petardyakov">Twitter</SW.Link>,
        <SW.Link href="https://www.instagram.com/pepodyakov/">
          Instagram
        </SW.Link>
      </SW.Row>
    </SW.Wrapper>
  );
}
