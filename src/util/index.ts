import { parseISO, format } from "date-fns";
import { enUS } from "date-fns/locale";

export const dateFormater = (date: any) => {
  return format(parseISO(date), "MM/d/yyyy", { locale: enUS });
};


export const formatCurrency = (num: any) => {
  return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
