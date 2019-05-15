
notFound = (req, res) => { 
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
}

// don't return errors, just log them locally
errorHandler = (err, req, res, next) =>{
  console.error(err.stack);  
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
}

module.exports = {
  notFound,
  errorHandler
}