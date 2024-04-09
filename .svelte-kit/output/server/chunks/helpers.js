let uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);
let sortAlpha = (arr, key) => arr.toSorted((a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);
const arrayRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);
export {
  arrayRange as a,
  sortAlpha as s,
  uniqueId as u
};
