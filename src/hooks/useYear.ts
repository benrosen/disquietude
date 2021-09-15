import { useEffect, useState } from "react";

import { Year } from "../types/Year";
import data from "../data/year.json";
import shuffleSeason from "../functions/shuffleSeason";

export default (): Year => {
  const [year, setYear] = useState<Year>(null);
  useEffect(() => {
    setYear(() => {
      const yearData = data as unknown as Year;
      return yearData
        ? ({
            spring: shuffleSeason(yearData.spring),
            summer: shuffleSeason(yearData.summer),
            fall: shuffleSeason(yearData.fall),
            winter: shuffleSeason(yearData.winter),
          } as Year)
        : null;
    });
  }, []);
  return year;
};
