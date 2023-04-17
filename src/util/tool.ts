export const capitalize = (str: string) =>
  str
    .trim()
    .replace(
      /([A-Za-z]+)/g,
      ($1: string) => $1.charAt(0).toUpperCase() + $1.slice(1).toLowerCase()
    );

export const divideToDash = (str: string) =>
  str
    .replace(/([A-Z]+)/g, ($1: string) => "-" + $1.toLowerCase())
    .replace(/\_/g, "-");

export const callable = (fn: Function) => `(${fn.toString()})(this)`;
