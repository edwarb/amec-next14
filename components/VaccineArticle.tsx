import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "next-i18next/pages";

export type RichListItem = {
  title?: string;
  body?: string;
  items?: string[];
};

export type VaccineBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "richOl"; items: RichListItem[] }
  | {
      type: "figure";
      src: string;
      caption: string;
      imageClass?: string;
    }
  | {
      type: "quote";
      text: string;
      author: string;
      role: string;
      image?: string;
    };

type VaccineNamespace =
  | "vaccineCampak"
  | "vaccineYellowFever"
  | "vaccineInfluenza"
  | "vaccineMeningitis"
  | "vaccineMmr"
  | "vaccineTyphoid"
  | "vaccineMr"
  | "vaccineVitaminC";

type VaccineArticleProps = {
  namespace: VaccineNamespace;
  heroImage: string;
  heroImageClass?: string;
};

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((part) => (
        <p key={part.slice(0, 32)} className="mt-2 first:mt-0">
          {part}
        </p>
      ))}
    </>
  );
}

function ListBlock({
  items,
  ordered,
}: {
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  const listClass = ordered
    ? "mt-4 max-w-xl list-decimal space-y-2 pl-6 text-gray-600"
    : "mt-4 max-w-xl list-disc space-y-2 pl-6 text-gray-600";

  return (
    <Tag role="list" className={listClass}>
      {items.map((item) => (
        <li key={item.slice(0, 32)}>{item}</li>
      ))}
    </Tag>
  );
}

function RichOrderedList({ items }: { items: RichListItem[] }) {
  return (
    <ol role="list" className="mt-4 max-w-xl list-decimal space-y-4 pl-6 text-gray-600">
      {items.map((item) => (
        <li key={(item.title ?? item.body ?? "").slice(0, 32)}>
          {item.title ? <strong>{item.title}</strong> : null}
          {item.body ? (
            <>
              {item.title ? " " : null}
              {item.body}
            </>
          ) : null}
          {item.items?.length ? (
            <ul className="my-2 max-w-xl list-disc space-y-2 pl-6">
              {item.items.map((subItem) => (
                <li key={subItem.slice(0, 32)}>{subItem}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export default function VaccineArticle({
  namespace,
  heroImage,
  heroImageClass = "object-top",
}: VaccineArticleProps) {
  const { t } = useTranslation(namespace);
  const blocks = t("blocks", { returnObjects: true }) as VaccineBlock[];

  return (
    <div className="relative bg-white px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-9 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff89] to-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <figure className="mt-16">
          <img
            className={`aspect-video h-[300px] w-full rounded-xl bg-gray-50 object-cover ${heroImageClass}`}
            src={heroImage}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            {t("fig")}
          </figcaption>
        </figure>
        <p className="mt-14 text-base font-semibold leading-7 text-green-600">
          {t("tags")}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("title")}
        </h1>
        <div className="mt-10 max-w-2xl">
          {Array.isArray(blocks) &&
            blocks.map((block, index) => {
              switch (block.type) {
                case "p":
                  return <Paragraphs key={index} text={block.text} />;
                case "h3":
                  return (
                    <h3 key={index} className="mt-6 text-xl leading-8">
                      {block.text}
                    </h3>
                  );
                case "ul":
                  return (
                    <ListBlock key={index} items={block.items} ordered={false} />
                  );
                case "ol":
                  return (
                    <ListBlock key={index} items={block.items} ordered />
                  );
                case "richOl":
                  return <RichOrderedList key={index} items={block.items} />;
                case "quote":
                  return (
                    <figure
                      key={index}
                      className="my-8 border-l border-indigo-600 pl-9"
                    >
                      <blockquote className="font-semibold text-gray-900">
                        <p>{block.text}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex gap-x-4">
                        {block.image ? (
                          <img
                            className="h-6 w-6 flex-none rounded-full bg-gray-50"
                            src={block.image}
                            alt=""
                          />
                        ) : null}
                        <div className="text-sm leading-6">
                          <strong className="font-semibold text-gray-900">
                            {block.author}
                          </strong>{" "}
                          – {block.role}
                        </div>
                      </figcaption>
                    </figure>
                  );
                case "figure":
                  return (
                    <figure key={index} className="mt-16">
                      <img
                        className={`aspect-video rounded-xl bg-gray-50 object-cover ${block.imageClass ?? ""}`}
                        src={block.src}
                        alt=""
                      />
                      <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon
                          className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                          aria-hidden="true"
                        />
                        {block.caption}
                      </figcaption>
                    </figure>
                  );
                default:
                  return null;
              }
            })}
        </div>
      </div>
    </div>
  );
}
