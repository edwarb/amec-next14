import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";

const HEADER = ["Jenis Medical Check-Up", "", "Harga"];

const BODY = [
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Pemeriksaan Fisik & Riwayat Kesehatan`,
  },
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Visus`,
  },
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Pemeriksaan Buta Warna`,
  },
  {
    currency: "IDR",
    amount: 110_000,
    typeStr: `Hematologi Lengkap`,
  },
  {
    currency: "IDR",
    amount: 55_000,
    typeStr: `Urine Lengkap`,
  },
  {
    currency: "IDR",
    amount: 55_000,
    typeStr: `SGOT`,
  },
  {
    currency: "IDR",
    amount: 55_000,
    typeStr: `SGPT`,
  },
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Cholestrol Total`,
  },
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Trigliserida`,
  },
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Creatinin`,
  },
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Asam Urat`,
  },
  {
    currency: "IDR",
    amount: 45_000,
    typeStr: `Gula Darah Puasa`,
  },
  {
    currency: "IDR",
    amount: 45_000,
    typeStr: `Reduksi Urin Gula Darah Puasa`,
  },
  {
    currency: "IDR",
    amount: 130_000,
    typeStr: `ECG`,
  },
  {
    currency: "IDR",
    amount: 150_000,
    typeStr: `Foto Thorax (FCR`,
  },
  {
    currency: "IDR",
    amount: 60_000,
    typeStr: `Konsultasi Hasil`,
  },
];

function ContentMedicalCheck() {
  return (
    <section className="flex flex-col items-center justify-center content-center">
      <h1 className="text-center">{`Promo Bulan Ini`}</h1>
      <div className="w-[500px]">
        <Table>
          <TableHeader>
            <TableRow>
              {HEADER.map((headStr) => (
                <TableHead key={headStr}>{headStr}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {BODY.map((value) => (
              <TableRow key={value.typeStr}>
                <TableCell>{value.typeStr}</TableCell>
                <TableCell />
                <TableCell className="text-right">
                  {rupiahFormat(value.amount)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell />
              <TableCell>{`Total`}</TableCell>
              <TableCell className="text-right">
                {rupiahFormat(getTotal(BODY))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default ContentMedicalCheck;

function getTotal(arrBody: { amount: number }[]) {
  return arrBody.reduce((memo, val) => {
    memo += val.amount;
    return memo;
  }, 0);
}
function rupiahFormat(number: number, currency = "IDR") {
  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  });
  return formatCurrency.format(number).replace("IDR", "Rp");
}
