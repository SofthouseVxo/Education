const shell = require('shelljs');
const argv = require('yargs').argv;

const fs = require('fs');


const lecturesFolder = `courses/${argv.type}/lectures/`;


fs.readdir(lecturesFolder, (err, files) => {
  const lectureFile = files.find((file)=>{
    if(file.search('-' + argv.lecture + '-') !== -1 && file.search('.mdx') !== -1){
      return file;
    }
  })

  if(lectureFile){
    shell.exec(`npx mdx-deck courses/${argv.type}/lectures/${lectureFile}`);
  }
});