import { DBResponseType } from "@/types";

function getDateArr(read: DBResponseType | null) {
  if (!read) return [];

  return Array.from(new Set(Object.keys(read).map((el) => read[el].read_date)));
}

export default getDateArr;
