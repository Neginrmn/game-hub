import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bullseye.png";
import neutral from "../assets/neutral.png";
import thumbsup from "../assets/thumbsup.png";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: neutral, alt: "meh" },
    4: { src: thumbsup, alt: "thumbsup" },
    5: { src: bullseye, alt: "bullseye" },
  };
  return <Image {...emojiMap[rating]} boxSize="30px" marginTop={2} />;
};

export default Emoji;
