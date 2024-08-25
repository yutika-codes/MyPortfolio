import DataUriParser from "datauri/parser.js";



const getDataUri = (file) =>{

    const parser = new DataUriParser();
    const extName = path.extname(file.originalName).toString()
    console.log(extName);
   return parser.format(extName,file.content);
};