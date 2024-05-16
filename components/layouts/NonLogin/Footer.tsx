function Footer() {
  return (
    <footer
      className={"bg-teal-500 text-white grid-content flex flex-row gap-4"}
    >
      <section className={"flex flex-row justify-around py-4"}>
        <div className="flex flex-col gap-2">
          <h1>{`Hubungi Kami`}</h1>
          <div className="flex flex-col">
            <span>{`Graha Amalia`}</span>
            <span>{`Jl. Dewi Sartika 364 A Cawang Jakarta Timur 13630`}</span>
            <span>{`Telepon : +6221 8090762`}</span>
            <span>{`Fax: +6221 80884802`}</span>
            <span>{`Whatsapp: +62 813 808 046 80`}</span>
            <span>{`Email: amaliamedicalcenter.cs@gmail.com`}</span>
            <span>{`Website: www.amaliamedicalcenter.co.id`}</span>
          </div>
        </div>

        <h1>{`Artikel`}</h1>
      </section>

      <hr className="grid-full" />
      <span className="text-center pb-4">
        {`© Amalia Medical Center 2024 - Handcrafted with love by Jakamedia Team`}
      </span>
    </footer>
  );
}

export default Footer;
