export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-EN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
