import { addMixin } from 'swiss-react';

addMixin('textStyle', (style = 'item') => {
  switch (style) {
    case 'body':
      return {
        _font: ['18px', '24px', '$regular']
      };
    case 'caption':
      return {
        _font: ['13px', '24px', '$medium']
      };
    case 'H3':
      return {
        _font: ['20px', '24px', '$regular']
      };
    case 'H2':
      return {
        _font: ['24px', '24px', '$regular']
      };
    case 'H1':
      return {
        _font: ['28px', '36px', '$regular'],
        letterSpacing: '-0.6px'
      };
    case 'title':
      return {
        _font: ['48px', '56px', '$regular'],
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
