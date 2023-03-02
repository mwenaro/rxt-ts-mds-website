import { IImage } from "../types";
const imagesPath = "/assets/images"

 const generatredImages:IImage[] =[
];
for(let i=0; i <=32; i++){
generatredImages.push(
    {
        src:`${imagesPath}/pic${i}.jpg`,
        des:`Image ${i+1}`
    }
)
}


export const images = generatredImages;

