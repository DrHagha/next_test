import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postDirectory = path.join(process.cwd(), 'posts')


export function getSortedPostData(){
    const fileName = fs.readdirSync(postDirectory);
    const allPostData = fileName.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        console.log("\n\n\n\n\n\ngetSortedPostData")
        console.log({
            id,
            ...matterResult.data,
        });


        return {
            id,
            ...matterResult.data,
        };
    });


    console.log('1234 allPostData: ', allPostData);
    return allPostData;
}