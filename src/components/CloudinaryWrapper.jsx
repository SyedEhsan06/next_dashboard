"use client";
 
import { CldImage as CldImageDefault, CldImageProps }  from 'next-cloudinary';
 
const CldImage = (CldImageProps) => {
  return <CldImageDefault {...CldImageProps} />;
}
 
export default CldImage;