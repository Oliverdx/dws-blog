function formateDate(date: string) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });

  return formatted;
}

export default formateDate;