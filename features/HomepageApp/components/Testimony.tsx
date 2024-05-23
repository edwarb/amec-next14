import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";
import { TESTIMONI_ARRAY } from "../constants/ConstTestimony";
import { Card, CardHeader } from "components/ui/card";

function Testimony() {
  return (
    <section className="flex flex-col gap-12">
      {/* title */}
      <div className="flex flex-col gap-2 items-center text-center">
        <h1>{`Testimonial`}</h1>
        <h3>{`Kepuasan pasien adalah kepuasan kami. Berikut beberapa testimoni dari pasien-pasien kami`}</h3>
      </div>

      {/* content */}
      <Carousel opts={{ loop: true, align: "start" }}>
        <CarouselContent className="h-[150px]">
          {TESTIMONI_ARRAY.map((val) => (
            <CarouselItem key={val.image} className="basis-1/2 h-full">
              <CardTestimony {...val} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Testimony;

interface ICardTestimony {
  name: string;
  image: string;
  job: string;
  text: string;
}
function CardTestimony(props: ICardTestimony) {
  const { image, name, text } = props;

  return (
    <Card className="h-full">
      <CardHeader className="flex-row gap-4">
        <div className="w-[75px] h-[75px] text-center">
          <img className="w-full h-full object-cover" src={image} />
          <p className="text-ellipsis text-xs text-gray-700">{name}</p>
        </div>

        <div className="flex-1">{text}</div>
      </CardHeader>
    </Card>
  );
}
