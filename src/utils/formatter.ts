import { format } from "date-fns";

export const formatDate = (date: Date | string): string => {
  if (date !== "" && date !== undefined) {
    return format(new Date(date), "dd MMM, yyyy");
  } else {
    return "~";
  }
};
