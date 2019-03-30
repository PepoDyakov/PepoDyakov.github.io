import { styleSheet } from 'swiss-react';

export default styleSheet('Landing', {
  Wrapper: {
    _size: '100%',
    _flex: ['column', 'left', 'top'],
    padding: '0 18px'
  },

  Row: {
    _textStyle: 'H1',
    fontWeight: '$bold',
    marginBottom: '12px',
    flexWrap: 'wrap',

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3',
      fontWeight: '$bold'
    }
  },

  Span: {
    _el: 'span',
    _textStyle: 'H1',
    fontWeight: '$bold',
    marginBottom: '12px',
    flexWrap: 'wrap',

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3',
      fontWeight: '$bold'
    }
  },

  Link: {
    _el: 'a',
    _textStyle: 'H1',
    fontWeight: '$bold',
    marginLeft: '3px',
    textDecoration: 'underline',

    '&:hover': {
      cursor: 'pointer'
    },

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3',
      fontWeight: '$bold'
    }
  }
});
