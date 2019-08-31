import { styleSheet } from 'swiss-react';
import { Link } from 'react-router-dom';

export default styleSheet('Blog', {
  Wrapper: {
    width: '100%'
  },

  Link: {
    _el: Link,
    _flex: ['row', 'left', 'center'],
    _size: ['100%', '60px']
  },

  LinkWrapper: {
    _flex: ['row', 'left', 'center'],

    '&:hover': {
      '& > .Blog_Title': {
        cursor: 'pointer'
      },

      '& > .Blog_ReadMeText': {
        opacity: '1',
        visibility: 'visible',
        transition: '.25s all ease-in-out'
      }
    }
  },

  Title: {
    _el: 'h1',
    _textStyle: 'H1',
    fontWeight: '$bold',
    textTransform: 'uppercase',
    backgroundColor: 'white',
    wordBreak: 'break-word',

    '@media screen and (max-width: 600px)': {
      _textStyle: 'H3',
      fontWeight: '$bold',
      height: '30px'
    }
  },

  ReadMeText: {
    _el: 'p',
    _textStyle: 'body',
    marginLeft: '8px',
    fontWeight: '$bold',
    textTransform: 'uppercase',
    flexShrink: '0',
    opacity: '0',
    visibility: 'hidden',
    transition: '.25s all ease-in-out'
  }
});
