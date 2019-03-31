import React from 'react';
import SW from './Landing.swiss.js';

export default function Landing() {
  return (
    <SW.Wrapper>
      <SW.IntroWrapper>
        <SW.Title>Hi, I'm Petar Dyakov a.k.a Decho 👋</SW.Title>
        <SW.Subtitle>
          I’m a software developer currently living in Sofia, Bulgaria 🇧🇬
          Currently working as Chief Consistency Officer at{' '}
          <SW.Link href="https://swipesapp.com" color="green">
            Swipes
          </SW.Link>
          . You can follow me on{' '}
          <SW.Link href="https://twitter.com/petardyakov" color="#55acee">
            Twitter
          </SW.Link>
          , check out my messy code on{' '}
          <SW.Link href="https://github.com/PepoDyakov" color="black">
            GitHub
          </SW.Link>{' '}
          or double-tap my photos on{' '}
          <SW.Link href="https://www.instagram.com/pepodyakov/" color="#c13584">
            Instagram
          </SW.Link>
          .
        </SW.Subtitle>
      </SW.IntroWrapper>
      <SW.ContentWrapper>
        <SW.Column>
          <SW.Title>Projects I'm working on</SW.Title>
          <SW.List>
            <SW.Item>
              <SW.ItemTitle>Dojohunt</SW.ItemTitle>
              <SW.ItemText>
                Improving the way how martial artists discover gyms that are
                best suitable for them.
              </SW.ItemText>
            </SW.Item>
            <SW.Item>
              <SW.ItemTitle>we-are.cc</SW.ItemTitle>
              <SW.ItemText>
                We form a place where a broad spectrum 🌈 of creatives share
                their personal and professional experiences ✌️
              </SW.ItemText>
            </SW.Item>
            <SW.Item>
              <SW.ItemTitle>This place</SW.ItemTitle>
              <SW.ItemText>
                A spot where I share my thoughts on different things.
              </SW.ItemText>
            </SW.Item>
          </SW.List>
        </SW.Column>
        <SW.Column>
          <SW.Title>Have worked on</SW.Title>
          <SW.Item>
            <SW.Link href="https://legalpad.io" underline>
              legalpad.io
            </SW.Link>
            <SW.Link href="https://jd.dk" underline>
              jd.dk
            </SW.Link>
            <SW.Link href="https://swipesapp.com" underline>
              swipesapp.com
            </SW.Link>
          </SW.Item>
        </SW.Column>
      </SW.ContentWrapper>
    </SW.Wrapper>
  );
}
