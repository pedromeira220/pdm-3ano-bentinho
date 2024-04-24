import React from "react";
import { Image, TouchableOpacity, View, ViewProps } from "react-native";

interface ImageCardProps extends ViewProps{
  image: any
}

export const ImageCard: React.FC<ImageCardProps> = ({image, style: customStyle,...rest}) => {
  return (
    <TouchableOpacity style={[{
      width: 176,
      height: 128,
      borderRadius: 16,
      overflow: "hidden"
    }, customStyle]} {...rest}>
      <Image 
        source={image}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    </TouchableOpacity>
  )
}