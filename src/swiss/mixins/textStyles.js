import { addMixin } from 'swiss-react';

addMixin('textStyle', (style = 'item') => {
  switch (style) {
    case 'body':
      return {
        _font: ['1rem', '1rem', '$regular']
      };
    case 'caption':
      return {
        _font: ['0.75rem', '1rem', '$medium']
      };
    case 'H3':
      return {
        _font: ['1.25rem', '1rem', '$regular']
      };
    case 'H2':
      return {
        _font: ['1.5rem', '1rem', '$regular']
      };
    case 'H1':
      return {
        _font: ['1.75rem', '2rem', '$regular'],
        letterSpacing: '-0.6px'
      };
    case 'title':
      return {
        _font: ['3rem', '3.5rem', '$regular'],
        letterSpacing: '-1.5px'
      };
    default:
      console.warn(
        `unsupported textStyle: ${style}. Check _textStyle.js for support`
      );
      return {
        _font: ['1rem', '1rem', '$regular']
      };
  }
});
