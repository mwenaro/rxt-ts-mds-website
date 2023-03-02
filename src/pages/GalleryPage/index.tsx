import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';


const Gallery: React.FC = () => {
  return (
    <div className="bg-gray-200 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium mb-4">Africa Big 10 Gallery</h1>
        <div className="grid grid-cols-3 gap-4 wrap">
          {
            images.map((pic:{src:string,des:string})=> <motion.img
              src={pic.src}
              alt={pic.des}
              className="rounded-lg w-full aspect-auto overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              loading={'lazy'}
            />)
          }
         
        </div>
      </div>
    </div>
  )
}

export default Gallery;