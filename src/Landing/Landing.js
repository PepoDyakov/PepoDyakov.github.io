import React from 'react';
import SW from './Landing.swiss.js';

export default function Landing() {
  return (
    <SW.Wrapper>
      <SW.Row>
        <SW.RowTitle>Name</SW.RowTitle>
        <SW.RowText>Petar Dyakov, a.k.a Decho</SW.RowText>
      </SW.Row>
      <SW.Row>
        <SW.RowTitle>Age</SW.RowTitle>
        <SW.RowText>23</SW.RowText>
      </SW.Row>
      <SW.Row>
        <SW.RowTitle>From</SW.RowTitle>
        <SW.RowText>
          Sofia,
          <SW.Span role="img" aria-label="Bulgarian flag">
            🇧🇬
          </SW.Span>
        </SW.RowText>
      </SW.Row>
      <SW.Row>
        <SW.RowTitle>Current job</SW.RowTitle>
        <SW.RowText>
          Chief Consistency Officer
          <SW.Link href="https://www.swipesapp.com" color="#05A851">
            @swipesapp
          </SW.Link>
        </SW.RowText>
      </SW.Row>
      <SW.Row>
        <SW.RowTitle>Currently working on</SW.RowTitle>
        <SW.RowList>
          <SW.RowListItem>
            <SW.RowText>This place</SW.RowText>
          </SW.RowListItem>
          <SW.RowListItem>
            <SW.RowText>
              Dojohunt -> (Platform for finding gyms in Sofia)
            </SW.RowText>
          </SW.RowListItem>
          <SW.RowListItem>
            <SW.RowText>
              <SW.Link href="http://we-are.cc" color="#f0a033">
                we-are.cc
              </SW.Link>
            </SW.RowText>
          </SW.RowListItem>
        </SW.RowList>
      </SW.Row>
      <SW.Row>
        <SW.RowTitle>Have worked on</SW.RowTitle>
        <SW.RowList>
          <SW.RowListItem>
            <SW.Link href="https://www.swipesapp.com" color="#05A851">
              swipesapp.com
            </SW.Link>
          </SW.RowListItem>
          <SW.RowListItem>
            <SW.Link href="https://jd.dk" color="#ed584e">
              jd.dk
            </SW.Link>
          </SW.RowListItem>
          <SW.RowListItem>
            <SW.Link href="https://legalpad.io" color="#374665">
              legalpad.io
            </SW.Link>
          </SW.RowListItem>
        </SW.RowList>
      </SW.Row>
      <SW.Row>
        <SW.RowTitle>Can be reached here</SW.RowTitle>
        <SW.RowList>
          <SW.RowListItem>
            <SW.Link href="mailto:petar.dyakov@icloud.com">Email</SW.Link>
            <SW.Span role="img" aria-label="mail">
              ✉️
            </SW.Span>
          </SW.RowListItem>
          <SW.RowListItem>
            <SW.Link href="https://twitter.com/petardyakov">Twitter</SW.Link>
            <SW.Span role="img" aria-label="chat">
              💬
            </SW.Span>
          </SW.RowListItem>
          <SW.RowListItem>
            <SW.Link href="https://www.instagram.com/pepodyakov/">
              Instagram
            </SW.Link>
            <SW.Span role="img" aria-label="camera">
              📸
            </SW.Span>
          </SW.RowListItem>
        </SW.RowList>
      </SW.Row>
    </SW.Wrapper>
  );
}
