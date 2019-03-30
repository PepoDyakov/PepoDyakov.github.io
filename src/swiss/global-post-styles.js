import { addGlobalStyles } from 'swiss-react';

addGlobalStyles({
  '.blog-post': {
    _size: ['100%', 'auto']
  },
  '.blog-post h1': {
    _size: ['100%', 'auto'],
    _textStyle: 'H1',
    fontWeight: '$bold',
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '24px'
  },
  '.blog-post h2': {
    _size: ['100%', 'auto'],
    _textStyle: 'H2',
    fontWeight: '$bold',
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '24px'
  },
  '.blog-post h3': {
    _size: ['100%', 'auto'],
    _textStyle: 'H3',
    fontWeight: '$bold',
    margin: '0 auto',
    marginBottom: '18px'
  },
  '.blog-post p': {
    _size: ['100%', 'auto'],
    _textStyle: 'body',
    margin: '0 auto',
    marginBottom: '30px'
  },
  '.blog-post p > span': {
    fontWeight: 700,
    backgroundColor: '#ffd776'
  },
  '.blog-post blockquote': {
    _size: ['100%', 'auto'],
    backgroundColor: 'rgba(#ffd776, .2)',
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '60px',
    padding: '30px 46px',
    paddingRight: 0
  },
  '.blog-post blockquote:before': {
    _size: ['17px', '100%'],
    backgroundColor: '#ffd776',
    content: ''
  },
  '.blog-post blockquote p': {
    _textStyle: 'body',
    fontStyle: 'italic',
    letterSpacing: '-.6px',
    margin: 0
  },
  '.blog-post img': {
    maxWidth: '100%',
    maxHeight: '50vh',
    display: 'block'
  },
  '.blog-post video': {
    _size: ['100%', 'auto'],
    display: 'block',
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '60px'
  },
  '.blog-post audio': {
    _size: ['100%', 'auto'],
    display: 'block',
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '60px'
  },
  '.blog-post strong': {},
  '.blog-post em': {},
  '.blog-post ul': {
    _size: ['100%', 'auto'],
    _textStyle: 'body',
    paddingLeft: '60px',
    margin: '0 auto',
    marginBottom: '30px',
    listStyle: 'initial'
  },
  '.blog-post ol': {
    _size: ['100%', 'auto'],
    _textStyle: 'body',
    paddingLeft: '60px',
    margin: '0 auto',
    marginBottom: '30px',
    listStyle: 'initial',
    listStyleType: 'decimal'
  },
  '.blog-post li': {
    _textStyle: 'body',
    listStyle: 'initial'
  },
  '.blog-post ol li': {
    listStyleType: 'decimal'
  },
  '.blog-post a img': {
    cursor: 'pointer'
  },
  '.blog-post a': {
    cursor: 'pointer',
    wordWrap: 'break-word'
  },
  '.blog-post a:hover': {
    textDecoration: 'underline',
    wordWrap: 'break-word'
  },
  '.blog-post a:visited': {
    color: '#5f50b7',
    textDecoration: 'underline',
    wordWrap: 'break-word'
  },
  '.blog-post a:focused': {
    outline: '1px dotted #5f50b7',
    wordWrap: 'break-word'
  },
  '.blog-post pre': {
    _size: ['100%', 'auto'],
    margin: '15px 0',
    padding: '9px'
  },
  '.blog-post code': {
    _size: ['100%', 'auto']
  },

  '@media screen and (max-width: 600px)': {
    '.blog-post h1': {
      _textStyle: 'H3'
    },
    '.blog-post h2': {
      _font: ['30px', '39px', 'bold']
    },
    '.blog-post h3': {},
    '.blog-post p': {},
    '.blog-post img': {
      margin: '30px auto'
    },
    '.blog-post img.small': {
      margin: '30px auto',
      minHeight: 'initial'
    },
    '.blog-post large': {
      margin: '30px auto',
      minHeight: 'initial'
    }
  }
});
