var fs = require('fs');
const argv = require('yargs').argv;

// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const markdownFolder = `courses/${argv.type}/lectures/markdown`;
const mdxFolder = `courses/${argv.type}/lectures/mdx/`;


let dir = fs.readdir(markdownFolder, (err, files)=>{
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 
  //listing all files using forEach
  files.forEach(function (file, index) {
    // if(index === 1){
      // Do whatever you want to do with the file
      fs.readFile(`${markdownFolder}/${file}`,'utf8', (err, data) => {

        if (err) throw err;


        const lectureSplits = data.split('\n');
        const imageImports = [];

        let content = `import { themes } from "mdx-deck";
import customTheme from "../../../../custom-theme";

export const theme = {
  ...themes.highlight,
  ...customTheme
};
`;

        let images = lectureSplits.filter((row)=> row.includes('<img'));

        images.forEach((image, index)=>{
          let imgSources = image.split(' ').filter((word)=> word.includes('src'));
          imgSources.forEach((img, i)=>{
            let imageImport = `\nimport img${index} from ${img.replace(/src="/, '"../../../..')};`;

            content = content + imageImport;
          });
        })

let counter = 0;

        let newLecture = lectureSplits.map((row)=>{
          
          if(row.includes('<img')){
            let rowSplit = row.split(' ');
            console.log(rowSplit);
            let src = rowSplit.filter((word)=> word.includes('src'));

            rowSplit[rowSplit.indexOf(src[0])] = `src={img${counter}}`;

            counter++;

            return `${rowSplit.join(' ').replace(/>/, '/>')}\n`
          }
          return `${row}\n`
        })

        let mdxLecture = `${content}

${newLecture.join('')}`;
        

        fs.writeFile(`${mdxFolder}/${file}x`, mdxLecture ,()=>{console.log('finished')})
      });
    // }
  });
})



// fs.writeFile('<fileName>',<>,callbackFunction)