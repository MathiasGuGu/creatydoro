import {create} from "zustand"

type PomodoroSettingsType = {
    workTime: number,
    shortBreakTime: number,
    longBreakTime: number,
    setWorkTime: (time: number) => void,
    setShortBreakTime: (time: number) => void,
    setLongBreakTime: (time: number) => void,
}

export const usePomodoroSettingsStore = create<PomodoroSettingsType>()((set) => ({
    workTime: 30,
    shortBreakTime: 5,
    longBreakTime: 10,
    setWorkTime: (time: number) => set({workTime: time}),
    setShortBreakTime: (time: number) => set({shortBreakTime: time}),
    setLongBreakTime: (time: number) => set({longBreakTime: time}),
}))