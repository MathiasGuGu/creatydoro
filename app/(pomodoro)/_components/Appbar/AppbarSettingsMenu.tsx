import { Combobox } from "@/components/ui/TimeCombobox";
import { Button } from "@/components/ui/button";
import React from "react";

const SettingsMenuButton = () => {
  return (
    <Button variant={"ghost"}>
      <span className="sr-only">Open pomodoro settings.</span>
      <svg className="size-6" viewBox="0 0 512 512">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"
        />
      </svg>
    </Button>
  );
};

const WorkTimeValues: Record<"value" | "label", string>[] = [
  { value: "10", label: "10 minutes" },
  { value: "20", label: "20 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
];

const LongBreakValues: Record<"value" | "label", string>[] = [
  { value: "10", label: "10 minutes" },
  { value: "20", label: "20 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
];

const ShortBreakValues: Record<"value" | "label", string>[] = [
  { value: "1", label: "1 minute" },
  { value: "5", label: "5 minutes" },
  { value: "10", label: "10 minutes" },
  { value: "20", label: "20 minutes" },
];

const SettingsTimeSelect = () => {
  return (
    <div className="flex items-center gap-1 ">
      <div className="flex items-center gap-1 border px-4 py-1 rounded-lg">
        <p className="text-xs">Work</p>
        <Combobox type="work" values={WorkTimeValues} />
        <p className="text-xs">Long:</p>
        <Combobox type="long" values={LongBreakValues} />
        <p className="text-xs">Short:</p>
        <Combobox type="short" values={ShortBreakValues} />
      </div>
    </div>
  );
};

const AppbarSettingsMenu = () => {
  return (
    <div className="flex items-center gap-2 h-full w-auto">
      <SettingsTimeSelect />
      <SettingsMenuButton />
    </div>
  );
};

export default AppbarSettingsMenu;
