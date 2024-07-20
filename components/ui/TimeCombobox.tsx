"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePomodoroSettingsStore } from "@/stores/PomodoroSettingsStore";

export function Combobox({
  values,
  type,
}: {
  values: Record<"value" | "label", string>[];
  type: "long" | "short" | "work";
}) {
  const settings = usePomodoroSettingsStore();
  const longBreak = settings.longBreakTime;
  const shortBreak = settings.shortBreakTime;
  const workTime = settings.workTime;
  const setLongbreak = settings.setLongBreakTime;
  const setShortBreak = settings.setShortBreakTime;
  const setWorkTime = settings.setWorkTime;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(
    type === "long" ? longBreak : type === "short" ? shortBreak : workTime
  );
  const [inputValue, setInputValue] = React.useState("12");

  React.useEffect(() => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }
  }, [inputRef.current?.value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size={"sm"}
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-between"
        >
          {value
            ? values.find((val) => val.value === value.toString())?.label
            : `use minutes`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput ref={inputRef} placeholder={`Custom time`} />
          <CommandEmpty>{inputValue} minute(s)</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {values.map((val) => (
                <CommandItem
                  key={val.value}
                  value={val.value}
                  onSelect={(currentValue) => {
                    setValue(
                      currentValue === value.toString()
                        ? type === "long"
                          ? longBreak
                          : type === "short"
                          ? shortBreak
                          : workTime
                        : parseInt(currentValue)
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.toString() === val.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {val.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
