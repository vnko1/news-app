type LSData = { [key: string]: unknown };

export function getDataFromLS<T>(name: string): T | null {
  const value = localStorage.getItem(name);
  return value ? JSON.parse(value) : value;
}

export function setDataToLs(data: LSData) {
  const keys = Object.keys(data);

  keys.forEach((key) => localStorage.setItem(key, JSON.stringify(data[key])));
}

export function removeDataFromLs(...args: string[]) {
  args.forEach((arg) => localStorage.removeItem(arg));
}
