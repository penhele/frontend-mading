import { format } from "date-fns";
import { id } from "date-fns/locale";

export function getFormatDate(text: Date) {
  const date = new Date(text);

  return format(date, "dd MMMM yyyy", { locale: id });
}
