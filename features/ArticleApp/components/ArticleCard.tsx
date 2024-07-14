import { Card } from "components/ui/card";
import Image from "next/image";
import { Article } from "types/Article";

const posts: any[] = [];
export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, idx) => (
            <ArticleList key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface IArticleList extends Article {
  onClick: (value: Article) => void;
}
export function ArticleList(props: IArticleList) {
  const { onClick, ...article } = props;
  return (
    <Card className="p-4">
      <article
        key={props.id}
        className="flex flex-col items-start justify-between"
      >
        <div className="relative w-full">
          <Image
            width={200}
            height={200}
            alt=""
            src={props.image}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={props.date} className="text-gray-500">
              {props.date}
            </time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <div
                className="cursor-pointer"
                onClick={() => {
                  props.onClick(article);
                }}
              >
                <span className="absolute inset-0" />
                {props.title}
              </div>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {props.parag}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span>Disunting oleh: </span>
                <span className="absolute inset-0" />
                {props.author}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Card>
  );
}
