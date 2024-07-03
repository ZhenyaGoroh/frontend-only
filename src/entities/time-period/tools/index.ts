import { TimePeriodData } from "../constants";

export function getLabelByIndex(
    index: number,
    data: TimePeriodData[]
  ): string {
    const item = data.find(item => item.index === index);
    return item ? item.label : "";
  }

export function getTimePeriodByIndex(
    index: number,
    data: TimePeriodData[]
  ): [number, number] {
    const item = data.find(item => item.index === index);
    return item ? item.timePeriod : [0, 0];
  }

  export function getSlidesDataByIndex(
    index: number,
    data: TimePeriodData[]
  ): { title: string; content: string; }[] {
    const item = data.find(item => item.index === index);
    return item ? item.slidesData : [];
  }
