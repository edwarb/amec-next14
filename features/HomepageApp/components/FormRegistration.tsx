import { Button } from "components/ui/button";
import { ReactNode, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { format } from "date-fns/format";
import { SendHorizonal } from "lucide-react";
import { Datepicker } from "components/ui/datepicker";
import { startOfDay, startOfToday } from "date-fns";
import { Checkbox } from "components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Input } from "components/ui/input";

const DICT_VACCINATION_TYPE = {
  CAMPAK: "Campak",
  INFLUENZA: "Influenza",
  MENINGITIS: "Meningitis Meningokokus",
  MMR: "MMR",
  POLIO_OPV: "Polio OPV",
  TIFOID: "Tifoid",
  VAKSIN_MR: "Vaksin MR",
  YELLOW_FEVER: "Yellow Fever",
  OTHER_VAKSIN: "Vaksin Lainnya",
} as const;

const VACCINATION_TYPE = [
  "CAMPAK",
  "INFLUENZA",
  "MENINGITIS",
  "MMR",
  "POLIO_OPV",
  "TIFOID",
  "VAKSIN_MR",
  "YELLOW_FEVER",
  "OTHER_VAKSIN",
] as const;

const DICT_GOAL_SERVICE = {
  UMROH: "Umroh",
  TKI: "Bekerja Di Luar Negeri",
  OTHER: "Perjalanan Lainnya",
};
const GOAL_SERVICE_TYPE = ["UMROH", "TKI", "OTHER"] as const;

const OPTION_GENDER = [
  { label: "Laki-Laki", value: "MALE" },
  { label: "Wanita", value: "FEMALE" },
];

const OPTION_TYPE_ID = [
  { label: "KTP", value: "KTP" },
  { label: "Passport", value: "PASSPORT" },
];

function FormRegistration() {
  const todayDate = useRef(new Date());
  const methods = useForm({
    defaultValues: {
      dateDeparture: null as null | Date,
      dateAppointment: null as null | Date,
      typeOfService: [] as string[],
      goalOfService: [] as string[],
      typeIdPatient: "",
      gender: "",
    },
  });
  const { control } = methods;

  return (
    <section
      className="grid-full bg-slate-200 grid-content py-16 gap-12"
      style={{ ["--content-max-width"]: "800px" } as any}
    >
      <h1 className="text-center">{`Informasi Pribadi Pemohon Vaksinasi`}</h1>

      <div className="flex flex-col gap-12 items-start">
        <FormWrapper label={"Tanggal Permohonan"}>
          <span>{format(todayDate.current, "dd MMM yyyy")}</span>
        </FormWrapper>

        <FormWrapper label={"Rencana Keberangkatan"}>
          <Controller
            name={"dateDeparture"}
            control={control}
            render={({ field }) => {
              return (
                <Datepicker
                  label={"Pilih Tanggal"}
                  value={field.value}
                  disabled={nowOrMoreDate}
                  onChange={field.onChange}
                />
              );
            }}
          />
        </FormWrapper>

        <FormWrapper label={"Tanggal Kunjungan ke Amalia Medical Center"}>
          <Controller
            name={"dateAppointment"}
            control={control}
            render={({ field }) => {
              return (
                <Datepicker
                  label={"Pilih Tanggal"}
                  value={field.value}
                  disabled={nowOrMoreDate}
                  onChange={field.onChange}
                />
              );
            }}
          />
        </FormWrapper>

        <FormWrapper label={"Jenis Vaksinasi"}>
          <Controller
            name={"typeOfService"}
            control={control}
            render={({ field }) => {
              function handleChange(type: string) {
                return (checked: boolean) => {
                  if (checked) {
                    field.onChange([...field.value, type]);
                  } else {
                    const nextValue = field.value.filter(
                      (values) => values !== type
                    );
                    field.onChange(nextValue);
                  }
                };
              }
              return (
                <CheckboxCustom
                  name={field.name}
                  options={VACCINATION_TYPE}
                  dict={DICT_VACCINATION_TYPE}
                  values={field.value}
                  onChange={handleChange}
                />
              );
            }}
          />
        </FormWrapper>

        <FormWrapper label={"Tujuan Vaksinasi"}>
          <Controller
            name={"goalOfService"}
            control={control}
            render={({ field }) => {
              function handleChange(type: string) {
                return (checked: boolean) => {
                  if (checked) {
                    field.onChange([...field.value, type]);
                  } else {
                    const nextValue = field.value.filter(
                      (values) => values !== type
                    );
                    field.onChange(nextValue);
                  }
                };
              }
              return (
                <CheckboxCustom
                  name={field.name}
                  options={GOAL_SERVICE_TYPE}
                  dict={DICT_GOAL_SERVICE}
                  values={field.value}
                  onChange={handleChange}
                />
              );
            }}
          />
        </FormWrapper>

        <FormWrapper label={"Jenis Identitas"}>
          <Controller
            name={"typeIdPatient"}
            control={control}
            render={({ field }) => (
              <SelectWrap
                placeholder="Pilih Jenis Identitas"
                value={field.value}
                onChange={field.onChange}
                options={OPTION_TYPE_ID}
              />
            )}
          />
        </FormWrapper>

        <FormWrapper label={"Nomor Identitas / Passport"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Nama Pasien"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Tempat Tanggal Lahir"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Alamat"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Telepon"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Email"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Nama Travel"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Nama yang merekomendasikan"}>
          <Input className="flex-1" />
        </FormWrapper>

        <FormWrapper label={"Foto Identitas"}>
          <Input className="flex-1" />
        </FormWrapper>

        <h2 className={"w-full text-center"}>
          {`Mohon Membawa KTP dan Paspor Pada Saat Kunjungan Vaksin`}
        </h2>

        <Button
          size={"lg"}
          className="justify-self-center self-center w-[600px]"
        >
          <span>{`Daftar`}</span>
          <SendHorizonal className="ml-4" />
        </Button>
      </div>
    </section>
  );
}

export default FormRegistration;

function FormWrapper({
  children,
  label,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-row gap-24 align-top justify-items-start w-full">
      <label className="w-[300px]">{label}</label>
      {children}
    </div>
  );
}

function CheckboxWrap({
  children,
  label,
  name,
}: {
  children: ReactNode;
  name: string;
  label: string;
}) {
  return (
    <div className="flex items-center space-x-2">
      {children}
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}

function nowOrMoreDate(date: Date) {
  return date < startOfToday() || startOfDay(date) === startOfToday();
}

interface ICheckbox {
  name: string;
  options: readonly string[];
  dict: Record<string, string>;
  values: string[];
  onChange: (type: string) => (checked: boolean) => void;
}
function CheckboxCustom(props: ICheckbox) {
  const { name, values, dict, options, onChange } = props;
  return (
    <div className="flex-1 grid grid-cols-[1fr_1fr] gap-x-8 gap-y-4">
      {options.map((option) => (
        <CheckboxWrap
          key={option}
          label={dict[option] || ""}
          name={`${name}-${option}`}
        >
          <Checkbox
            id={`${name}-${option}`}
            onCheckedChange={onChange(option)}
            value={option}
            checked={values.includes(option)}
          />
        </CheckboxWrap>
      ))}
    </div>
  );
}

interface ISelect {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}
function SelectWrap(props: ISelect) {
  const { placeholder, options, value, onChange } = props;
  const valueLabel =
    options.find((option) => option.value === value)?.label || "";
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((val) => (
            <SelectItem key={val.value} value={val.value}>
              {val.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
