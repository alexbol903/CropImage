import {
  ETabs,
  TDictionaryNumber,
  TDictionaryType,
  TTabs,
} from '@/types/index';

export const tabsInit = (): TDictionaryType<TTabs> => {
  return {
    custom: {
      id: ETabs.CUSTOM,
      name: 'Custom size',
    },
    template: {
      id: ETabs.TEMPLATE,
      name: 'Template size',
    },
  };
};

export const sizeInit = (): TDictionaryNumber => {
  return {
    width: 300,
    height: 250,
  };
};
