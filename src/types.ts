export type ValueOf<T> = T[keyof T];

export type TimeInterval = number; // Swift time interval since 1970

export type Code = {
  code: string;
  display: string;
};

export type CodeWithSystem = Code & { system: string };
