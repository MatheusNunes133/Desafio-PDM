import React from "react";

import { Image } from "../../global/styles/ImageType";

interface PropsImageType {
  image: NodeRequire;
}

export default function ImageType({ image }: PropsImageType) {
  return <Image source={image} />;
}
