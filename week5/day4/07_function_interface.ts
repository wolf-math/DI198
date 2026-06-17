interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let format: StringFormat;

format = function (src, upper) {
  return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));
