import { styleSheet } from 'swiss-react';
import { NavLink } from 'react-router-dom';

export default styleSheet('App', {
  Wrapper: {
    _size: '100%',
    _flex: ['column', 'left', 'top'],
    maxWidth: '970px',
    margin: '0 auto'
  },

  NavBar: {
    _flex: ['row', 'left', 'center'],
    _size: ['100%', '70px'],
    flex: 'none'
  },

  Link: {
    _el: NavLink,
    _textStyle: 'body',
    fontWeight: '$medium',

    '&:first-child': {
      marginRight: '18px'
    },

    '&:hover': {
      color: 'grey'
    }
  }
});
