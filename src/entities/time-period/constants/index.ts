import { SelectItemData } from "../../select-items/constants";

export interface TimePeriodData {
  index: number;
  label: string;
  timePeriod: [firstDate: number, secondDate: number];
  slidesData: {
    title: string;
    content: string;
  }[];
}

export const timePeriodData: TimePeriodData[] = [
  {
    index: 1,
    label: "Наука",
    timePeriod: [2003, 2005],
    slidesData: [
      {
        title: "1",
        content: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        title: "2",
        content: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        title: "3",
        content: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        title: "4",
        content: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        title: "41234",
        content: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
    ],
  },
  {
    index: 2,
    label: "Музыка",
    timePeriod: [2006, 2007],
    slidesData: [
      {
        title: "asdfasdf",
        content: "1asdfasdfasdfasdf",
      },
      {
        title: "2asdfasdfa",
        content: "2asdfasdfas",
      },
      {
        title: "3asdfasdfa",
        content: "3asdfasdfa",
      },
      {
        title: "3asdfasdfa",
        content: "3asdfasdfa",
      },
      {
        title: "3asdfasdfa",
        content: "3asdfasdfa",
      },
    ],
  },
  {
    index: 3,
    label: "Игры",
    timePeriod: [2008, 2009],
    slidesData: [
      {
        title: "123412341",
        content: "1123412341234",
      },
      {
        title: "212341234",
        content: "12342",
      },
      {
        title: "312431234",
        content: "3asdfasdf",
      },
      {
        title: "312431234",
        content: "3asdfasdf",
      },
      {
        title: "312431234",
        content: "3asdfasdf",
      },
    ],
  },
  {
    index: 4,
    label: "Кино",
    timePeriod: [2010, 2011],
    slidesData: [
      {
        title: "1dfhdfg d",
        content: "1dfg hdfg hdfg hdfg hdfg hdfg hdfg hdfg hdfg hdfg h",
      },
      {
        title: "2dfghd",
        content: "2asdfasdf",
      },
      {
        title: "3asdfasdf",
        content: "3asdfasdfasdfasdf",
      },
      {
        title: "3asdfasdf",
        content: "3asdfasdfasdfasdf",
      },
      {
        title: "3asdfasdf",
        content: "3asdfasdfasdfasdf",
      },
    ],
  },
  {
    index: 5,
    label: "Спорт",
    timePeriod: [2012, 2013],
    slidesData: [
      {
        title: "1",
        content: "1",
      },
      {
        title: "2",
        content: "2",
      },
      {
        title: "3",
        content: "3",
      },
      {
        title: "3",
        content: "3",
      },
      {
        title: "3",
        content: "3",
      },
    ],
  },
  {
    index: 6,
    label: "Работа",
    timePeriod: [2014, 2015],
    slidesData: [
      {
        title: "1",
        content: "1",
      },
      {
        title: "2",
        content: "2",
      },
      {
        title: "3",
        content: "3",
      },
      {
        title: "3",
        content: "3",
      },
      {
        title: "3",
        content: "3",
      },
    ],
  },
];
