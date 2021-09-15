import { useEffect, useState } from "react";

import { Week } from "../types/Week";
import { Year } from "../types/Year";
import getWeekFromYearByIndex from "../functions/getWeekFromYearByIndex";

export default (index: number, year: Year): Week => {
  const [week, setWeek] = useState<Week>([]);
  useEffect(() => {
    setWeek(() => getWeekFromYearByIndex(index, year));
  }, [index, year]);
  return week;
};
