export function dateToDatetime(date) {
  return (typeof date === "string" ? date : date.toISOString())
    .replace("Z", "")
    .replace("T", " ");
}
