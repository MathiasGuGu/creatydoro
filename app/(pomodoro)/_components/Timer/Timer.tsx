"use client";
import { Button } from "@/components/ui/button";
import { usePomodoroSettingsStore } from "@/stores/PomodoroSettingsStore";
import React, { useEffect } from "react";

const Timer = () => {
  const settings = usePomodoroSettingsStore();
  const longBreak = settings.longBreakTime;
  const shortBreak = settings.shortBreakTime;
  const workTime = settings.workTime;
  const [time, setTime] = React.useState("");

  useEffect(() => {
    let minutes = workTime;
    let seconds = 0;
    const timer = setInterval(() => {
      if (seconds === 0) {
        minutes--;
        seconds = 60;
      }
      seconds--;
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
      }
      setTime(`${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(timer);
  }, [workTime]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center w-64 aspect-square rounded-full bg-red-200">
        <div className="flex flex-col items-center justify-center w-56 aspect-square rounded-full bg-white">
          <h2 className="text-3xl font-bold">{time}</h2>
        </div>
      </div>
      <div className="flex gap-2">
        <Button>Start</Button>
        <Button variant={"ghost"}>Stop</Button>
        <Button variant={"ghost"}>Pause</Button>
      </div>
    </div>
  );
};

export default Timer;
