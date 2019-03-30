import { styleSheet } from 'swiss-react';
import { Link } from 'react-router-dom';

export default styleSheet('Blog', {
  Wrapper: {
    width: '100%',
    padding: '0 18px'
  },

  LinkWrapper: {
    _flex: ['column', 'left', 'top'],
    width: '100%',
    marginBottom: '12px',

    '@media screen and (max-width: 600px)': {
      marginBottom: '0'
    }
  },

  Link: {
    _el: Link,
    width: '100%'
  },

  Title: {
    _el: 'h1',
    _textStyle: 'H1',
    width: '100%',
    height: '48px',
    fontWeight: '$bold',
    textTransform: 'uppercase',
    backgroundColor: 'white',
    zIndex: '5',
    wordBreak: 'break-word',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    },

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3',
      fontWeight: '$bold',
      height: '30px'
    }
  }
});
