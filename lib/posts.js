import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData(){
    const fileName = fs.readdirSync(postDirectory);
    const allPostData = fileName.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        console.log(matterResult.data);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostData.sort((a, b) => {
        if(a.date < b.data){
            return 1;
        }
        else {
            return -1;
        }
    });
}