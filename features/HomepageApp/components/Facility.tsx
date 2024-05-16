import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";
import { CONTENT_FACILITY } from "../constants/ConstIntroFacility";

import { Card, CardContent, CardHeader } from "components/ui/card";
import Autoplay from "embla-carousel-autoplay";

function Facility() {
  return (
    <section className="flex flex-col gap-4">
      {/* title */}
      <div className="flex flex-col gap-2 items-center text-center">
        <h1>{`Pelayanan Klinik`}</h1>
        <h3>{`Kami menyediakan berbagai macam jenis pelayanan medis. Pilih sesuai kebutuhan Anda`}</h3>
      </div>

      <Carousel
        // opts={{ loop: true }}
        // plugins={[
        //   Autoplay({
        //     playOnInit: true,
        //     delay: 3000,
        //     stopOnInteraction: false,
        //     stopOnMouseEnter: true,
        //   }),
        // ]}
      >
        <CarouselContent>
          {CONTENT_FACILITY.map((val) => (
            <CarouselItem key={val.imgSrc} className="basis-1/3">
              <CardFacility {...val} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Facility;

interface ICardFacility {
  title: string;
  content: string;
  imgSrc: string;
  href: string;
}
function CardFacility(props: ICardFacility) {
  const { content, href, imgSrc, title } = props;
  return (
    <Card>
      <CardHeader className="h-[300px]">
        <img className="h-full" src={imgSrc} />
      </CardHeader>
      <CardContent>
        <div>Content here</div>
      </CardContent>
    </Card>
  );
}
