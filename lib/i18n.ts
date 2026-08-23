import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";

/** Shared chrome (header/footer) + optional page namespaces */
export function createGetStaticProps(namespaces: string[] = ["common"]) {
  const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? "id", [
        "common",
        ...namespaces.filter((ns) => ns !== "common"),
      ])),
    },
  });

  return getStaticProps;
}
