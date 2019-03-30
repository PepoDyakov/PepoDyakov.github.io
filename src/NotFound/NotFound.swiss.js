import { styleSheet } from 'swiss-react';

export default styleSheet('NotFound', {
  Wrapper: {
    _size: '100%',
    _flex: ['column', 'center', 'center']
  },

  Title: {
    _el: 'h1',
    _textStyle: 'title',
    fontWeight: '$bold',
    marginBottom: '48px'
  },

  Image: {
    _el: 'img',
    width: '500px'
  }
});
