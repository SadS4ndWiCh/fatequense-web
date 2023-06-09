import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

import { Lesson, Schedules, schedulesSchema } from "./validators/schedule";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateToTimeStr(date: string) {
  return dayjs(date).format("HH:mm");
}

type ScheduleHorary = Lesson & {
  weekday: number;
};

export function tabulateSchedule(schedules: Schedules) {
  const schedulesParsed = schedulesSchema.parse(schedules);

  const horariesMap = new Map<string, ScheduleHorary[]>();

  schedulesParsed.forEach((schedule) => {
    schedule.forEach((lesson) => {
      const key = `${dateToTimeStr(lesson.startsAt)}-${dateToTimeStr(
        lesson.endsAt
      )}`;
      const prevHoraries = horariesMap.get(key);
      const lessonHorary: ScheduleHorary = {
        ...lesson,
        weekday: dayjs(lesson.startsAt).day(),
      };

      horariesMap.set(
        key,
        prevHoraries ? [...prevHoraries, lessonHorary] : [lessonHorary]
      );
    });
  });

  return horariesMap;
}
