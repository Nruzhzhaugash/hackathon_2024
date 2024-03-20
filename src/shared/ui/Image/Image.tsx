import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

type MotionAttributes = React.ComponentProps<typeof motion.img>;

interface MImageProps extends MotionAttributes {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

const MImage = forwardRef<HTMLImageElement, MImageProps>((props, ref) => {
  const { src, alt, width, height, ...motionProps } = props;

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...motionProps}
    />
  );
});

MImage.displayName = 'MImage'; 

export default MImage;

