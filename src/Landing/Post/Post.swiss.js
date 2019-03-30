import { styleSheet } from 'swiss-react';

export default styleSheet('Post', {
  Wrapper: {
    _flex: ['column', 'left', 'top'],
    padding: '0 18px'
  },

  Header: {
    _flex: ['column', 'left', 'top']
  },

  Title: {
    _el: 'h1',
    _textStyle: 'title',
    fontWeight: '$bold',
    marginBottom: '12px',
    textTransform: 'lowercase',
    wordBreak: 'break-word',

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H2',
      fontWeight: '$bold'
    }
  },

  Subtitle: {
    _el: 'h3',
    _textStyle: 'H3',
    fontWeight: '$medium',
    marginBottom: '24px',
    wordBreak: 'break-word',

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3'
    }
  }
});
