import { useEffect, useState } from "react";

import { Year } from "../types/Year";
import data from "../data/year.json";
import useSeasonLoader from "./useSeasonLoader";

export default (): [Year, number] => {
  const [year, setYear] = useState<Year>(null);
  const loadSeason = useSeasonLoader();
  useEffect(() => {
    setYear(() => {
      const yearData = data as unknown as Year;
      return yearData
        ? ({
            spring: loadSeason(yearData.spring, [], []),
            summer: loadSeason(yearData.summer, [], [12]),
            fall: loadSeason(yearData.fall, [], []),
            winter: loadSeason(yearData.winter, [12], []),
          } as Year)
        : null;
    });
  }, []);
  return [
    year,
    year
      ? year.spring.length +
        year.summer.length +
        year.fall.length +
        year.winter.length
      : 0,
  ];
};
