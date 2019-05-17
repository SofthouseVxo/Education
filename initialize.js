Reveal.initialize({
  dependencies: [
    { src: '../../reveal/plugin/markdown/marked.js' },
    { src: '../../reveal/plugin/markdown/markdown.js' },
    { src: '../../reveal/plugin/notes/notes.js', async: true },
    { src: '../../reveal/plugin/highlight/highlight.js', async: true }
  ]
});

var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? '../../reveal/css/print/pdf.css' : '../../reveal/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );
