const shell = require('shelljs');
const argv = require('yargs').argv;

console.log(argv);

shell.exec(`npx mdx-deck courses/${argv.type}/lectures/lecture-${argv.type}-${argv.lecture}.mdx`);