import { Card } from "components/ui/card";
import Image from "next/image";

interface Props {
  alt: string;
  src: string;
  width?: number;
  height?: number;
}
function CardImage({ src, alt, width = 400, height = 300 }: Props) {
  return (
    <Card className="p-4 h-[300px] overflow-hidden">
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        className="object-cover h-full"
      />
    </Card>
  );
}

export default CardImage;
