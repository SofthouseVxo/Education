var data = [];

/**
 * Lets pretend that we fetch some data which is returned as a string instead of an array
 */
data = 'some response data';

try {
  data.forEach(function(element) {
    console.log(element);
  });
} catch {
  console.log('incorrect data format');
}