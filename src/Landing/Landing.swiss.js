import { styleSheet } from 'swiss-react';

export default styleSheet('Landing', {
  Wrapper: {
    _size: '100%',
    _flex: ['column', 'left', 'top']
  },

  IntroWrapper: {
    _flex: ['column', 'left', 'top'],
    maxWidth: '650px',

    '@media screen and (max-width: 600px)': {
      width: '100%'
    }
  },

  Title: {
    _el: 'h1',
    _font: ['48px', 'normal', '$bold'],
    marginBottom: '20px',

    '@media screen and (max-width: 600px)': {
      _font: ['36px', 'normal', '$bold']
    }
  },

  Subtitle: {
    _el: 'h3',
    _font: ['24px', 'normal', '$regular'],

    '@media screen and (max-width: 600px)': {
      _font: ['20px', 'normal', '$regular']
    }
  },

  Link: {
    _el: 'a',
    _font: ['24px', 'normal', '$bold'],
    color: get => `${get('color')}`,

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    },

    underline: {
      textDecoration: 'underline',
      marginBottom: '23px'
    },

    '@media screen and (max-width: 600px)': {
      _font: ['20px', 'normal', '$bold']
    }
  },

  ContentWrapper: {
    _flex: ['row', 'left', 'top'],
    width: '100%',
    marginTop: '40px',

    '@media screen and (max-width: 600px)': {
      _flex: ['column', 'left', 'top']
    }
  },

  Column: {
    _flex: ['column', 'left', 'top'],
    maxWidth: '550px',

    '&:first-child': {
      marginRight: '40px'
    },

    '@media screen and (max-width: 600px)': {
      '&:first-child': {
        marginRight: '0px'
      }
    }
  },

  List: {
    _el: 'ul'
  },

  Item: {
    _flex: ['column', 'left', 'top'],
    marginBottom: '15px'
  },

  ItemTitle: {
    _font: ['20px', 'normal', '$medium'],
    marginBottom: '15px'
  },

  ItemText: {
    _font: ['16px', '26px', '$regular']
  }
});
