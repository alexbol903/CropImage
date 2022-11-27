export type TDictionaryType<T> = {
  [key: string]: T;
};

export type TDictionaryString = {
  [key: string]: string;
};

export type TDictionaryNumber = {
  [key: string]: number;
};

export type TDictionaryAny = {
  [key: string]: any;
};

export type TDropdownType<T> = {
  label: string;
  value: T;
};

export type TDropdownString = {
  label: string;
  value: string;
};

export type TDropdownNumber = {
  label: string;
  value: number;
};

export type TTabs = {
  id: string;
  name: string;
};
