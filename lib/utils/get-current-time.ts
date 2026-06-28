export const getCurrentTime = new Date().toLocaleString("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
