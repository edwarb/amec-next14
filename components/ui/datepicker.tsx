"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "lib/utils";
import { Button } from "components/ui/button";
import { Calendar, CalendarProps } from "components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";

import { id } from "date-fns/locale/id";
import { useState } from "react";

interface Props extends Omit<CalendarProps, "value" | "onChange"> {
  label: string;
  value: Date | null;
  onChange: (value: Date) => void;
}
export function Datepicker(props: Props) {
  const {
    value,
    label,
    onChange,
    initialFocus: _initialFocus,
    mode: _mode,
    selected: _selected,
    ...restCalendar
  } = props;

  const [openPop, setOpen] = useState(false);

  function handleSelectDate(newDate: Date | undefined) {
    if (newDate) {
      onChange(newDate);
      setOpen(false);
    }
  }

  return (
    <Popover
      open={openPop}
      onOpenChange={(isClosing) => {
        setOpen(isClosing);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
          onClick={() => {
            setOpen(true);
          }}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP", { locale: id }) : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value || undefined}
          onSelect={handleSelectDate}
          initialFocus
          {...restCalendar}
        />
      </PopoverContent>
    </Popover>
  );
}
