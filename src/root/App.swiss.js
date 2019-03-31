import { styleSheet } from 'swiss-react';
import { NavLink } from 'react-router-dom';

export default styleSheet('App', {
  Wrapper: {
    _size: ['calc(100% - 120px)', '100%'],
    _flex: ['column', 'left', 'top'],
    overflowX: 'hidden',
    margin: '0 60px',
    minHeight: '100vh',

    '@media screen and (max-width: 600px)': {
      _size: ['calc(100% - 60px)', '100%'],
      margin: '0 30px'
    }
  },

  NavBar: {
    _el: 'nav',
    _flex: ['row', 'left', 'center'],
    _size: ['100%', '70px'],
    flex: 'none'
  },

  Logo: {
    _el: 'img',
    width: '80px'
  },

  Link: {
    _el: NavLink,
    _textStyle: 'body',

    '&:first-child': {
      marginRight: 'auto'
    },

    '&:not(:first-child)': {
      marginRight: '18px'
    },

    '&:hover': {
      color: 'grey'
    }
  }
});
