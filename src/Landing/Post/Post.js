import React from 'react';
import ReactMarkdown from 'react-markdown';
import SW from './Post.swiss';

export default function Post(props) {
  const { state } = props.location;
  return (
    <SW.Wrapper>
      <SW.Title>{state.title}</SW.Title>
      <SW.Subtitle>{state.subtitle}</SW.Subtitle>
      <ReactMarkdown source={state.content} className="blog-post" />
    </SW.Wrapper>
  );
}
