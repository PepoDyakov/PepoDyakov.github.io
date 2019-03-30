import { styleSheet } from 'swiss-react';
import { NavLink } from 'react-router-dom';

export default styleSheet('App', {
  Wrapper: {
    _size: '100%',
    _flex: ['column', 'left', 'top'],
    maxWidth: '760px',
    margin: '0 auto',
    overflowX: 'hidden',
    minHeight: '100vh'
  },

  NavBar: {
    _el: 'nav',
    _flex: ['row', 'left', 'center'],
    _size: ['100%', '70px'],
    flex: 'none',
    padding: '0 18px'
  },

  Link: {
    _el: NavLink,
    _textStyle: 'body',
    fontWeight: '$bold',

    '&:first-child': {
      marginRight: '18px'
    },

    '&:hover': {
      color: 'grey'
    }
  }
});
