
import { FC } from 'react';

interface ImagePlaceholderProps {
  text?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  text = "Image Placeholder",
  width = "100%",
  height = "100%",
  bgColor = "#f0f0f0",
  textColor = "#666666"
}) => {
  return (
    <div 
      style={{
        width,
        height,
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: textColor,
        fontSize: '14px',
        fontFamily: 'sans-serif',
        padding: '20px',
        boxSizing: 'border-box',
        textAlign: 'center'
      }}
    >
      {text}
    </div>
  );
};

export default ImagePlaceholder;
