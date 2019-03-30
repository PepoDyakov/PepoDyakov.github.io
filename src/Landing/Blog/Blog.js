import React, { useState, useEffect } from 'react';

import SW from './Blog.swiss';

var contentful = require('contentful');

let client = contentful.createClient({
  space: 'z8eq0o5z2qn0',
  accessToken:
    'b699bc16154bedc7c79c05758fd97fc1c37d179c7e9b39f64bf6912c5465113a'
});

export default function Blog(props) {
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    client.getEntries({ order: 'sys.createdAt' }).then(content => {
      getPosts([...content.items]);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <SW.Wrapper>
        <SW.Title>Loading...</SW.Title>
      </SW.Wrapper>
    );
  }

  return (
    <SW.Wrapper>
      {posts.map((p, i) => {
        return (
          <SW.Link
            to={{
              pathname: `test${p.fields.path}`,
              state: { ...p.fields }
            }}
            key={i}
          >
            <SW.LinkWrapper>
              <SW.Title>{p.fields.title}</SW.Title>
            </SW.LinkWrapper>
          </SW.Link>
        );
      })}
    </SW.Wrapper>
  );
}
