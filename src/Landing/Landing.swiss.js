import { styleSheet } from 'swiss-react';

export default styleSheet('Landing', {
  Wrapper: {
    _size: '100%',
    _flex: ['column', 'left', 'top'],
    padding: '0 18px'
  },

  Row: {
    _flex: ['column', 'left', 'top'],
    marginBottom: '12px',
    flexWrap: 'wrap'
  },

  RowTitle: {
    _el: 'h1',
    _textStyle: 'H1',
    fontWeight: '$bold',
    marginBottom: '12px',

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3',
      fontWeight: '$bold'
    }
  },

  RowText: {
    _el: 'h1',
    _textStyle: 'H1',
    fontWeight: '$regular'
  },

  RowList: {
    _el: 'ul'
  },

  RowListItem: {
    _el: 'li'
  },

  Span: {
    _el: 'span',
    _textStyle: 'H1',
    fontWeight: '$bold',
    marginLeft: '6px',
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
    fontWeight: '$regular',
    textDecoration: 'underline',
    padding: '6px 0',
    color: get => `${get('color')}`,

    '&:hover': {
      cursor: 'pointer'
    },

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3',
      fontWeight: '$bold'
    }
  }
});
