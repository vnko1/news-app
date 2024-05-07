function formatDate(
  date?: number | string | Date,
  local: Intl.LocalesArgument = "en-GB",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }
) {
  return new Date(date || Date.now()).toLocaleDateString(local, options);
}

export default formatDate;
