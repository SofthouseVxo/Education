const fs = require('fs');
const argv = require('yargs').argv;

const markdownFolder = `courses/${argv.type}/lectures/markdown`;
const mdxFolder = `courses/${argv.type}/lectures/mdx/`;

let mdxBaseContent = `import { themes } from "mdx-deck";
import customTheme from "../../../../custom-theme";

export const theme = {
  ...themes.highlight,
  ...customTheme
};`;

function readFiles(){
  fs.readdir(markdownFolder, (err, files)=>{
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(readFile);
  })
}

function readFile(fileName){
  fs.readFile(`${markdownFolder}/${fileName}`,'utf8', (err, file) => {
    if (err) throw err;
    transformFile(file, fileName);
  })
}

function transformFile(markdownFile, fileName){
  const markdownAsArray = markdownFile.split('\n');

  let images = markdownAsArray.filter((row)=> row.includes('<img'));
  let imageImports = createImageImports(images);
  let markdownWithUpdatedImgElements = transformMarkdownImageElements(markdownAsArray);
  
  // messy indentations due to markdown and template literals
  let mdxLecture = `${mdxBaseContent}

${imageImports}

${markdownWithUpdatedImgElements.join('')}`;
  
  fs.writeFile(`${mdxFolder}/${fileName}x`, mdxLecture ,()=>{console.log('finished')})
};

function createImageImports(images){
  let imageImports = '';
  images.forEach((image, index)=>{
    let imgSources = image.split(' ').filter((word)=> word.includes('src'));
    imgSources.forEach((img, i)=>{
    let imageImport = `\nimport img${index} from ${img.replace(/src="/, '"../../../..')};`;

      imageImports = imageImports + imageImport;
    });
  })

  return imageImports;
}

function transformMarkdownImageElements(markdownAsArray){
  let counter = 0;

  return markdownAsArray.map((row)=>{
    if(row.includes('<img')){
      let rowSplit = row.split(' ');
      let src = rowSplit.filter((word)=> word.includes('src'))[0];
      let width = rowSplit.filter((word)=> word.includes('width="'))[0];

      rowSplit[rowSplit.indexOf(src)] = `src={img${counter}}`;
      
      if(width){
        let parsedWidth = width.replace(/width="/, '').slice(0, -1);
        rowSplit[rowSplit.indexOf(width)] = `style={{width: ${parsedWidth}}}`;
      }
      counter++;
      return `${rowSplit.join(' ').replace(/>/, '/>')}\n`
    }
    return `${row}\n`
  })
}

readFiles();