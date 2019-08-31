import { styleSheet } from 'swiss-react';
import { NavLink } from 'react-router-dom';

export default styleSheet('App', {
  Wrapper: {
    _size: '100%',
    _flex: ['column', 'left', 'top'],
    overflowX: 'hidden',
    margin: '0 auto',
    minHeight: '100vh',
    maxWidth: '1000px',

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
    fontWeight: 'bold',

    '&:not(:first-child)': {
      marginLeft: '25px'
    },

    '&:hover': {
      color: 'grey'
    }
  }
});
