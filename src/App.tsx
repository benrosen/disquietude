import { Fragment, useCallback, useEffect, useState } from "react";

import data from "./year.json";

type Year = null | {
  spring: Season;
  summer: Season;
  fall: Season;
  winter: Season;
};

type Season = [
  Week,
  Week,
  Week,
  Week,
  Week,
  Week,
  Week,
  Week,
  Week,
  Week,
  Week,
  Week,
  Week
];

type Week = Prompt[];

type Prompt = string;

const shuffleSeason = (season: Season): Season => {
  return season
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value) as Season;
};

const getWeekByIndex = (index: number, year: Year): Week => {
  return year && index >= 0 && index < 52
    ? [...year.spring, ...year.summer, ...year.fall, ...year.winter][index]
    : [];
};

const useIncrement = (): [number, () => void] => {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount((count) => {
      return count + 1;
    });
  }, []);
  return [count, incrementCount];
};

const useWeek = (index: number, year: Year): Week => {
  const [week, setWeek] = useState<Week>([]);
  useEffect(() => {
    setWeek(() => {
      return getWeekByIndex(index, year);
    });
  }, [index, year]);
  return week;
};

const useYear = (): Year => {
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

const App = () => {
  const [count, incrementCount] = useIncrement();
  const year = useYear();
  const week = useWeek(count, year);
  return (
    <Fragment>
      <div
        style={{
          fontFamily: "Gentium Book Basic",
          letterSpacing: ".125rem",
          fontSize: "3rem",
          fontStyle: "italic",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        The Quiet Year
      </div>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Gentium Book Basic",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >{`~ Week ${count + 1} ~`}</div>
        </div>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          {week.map((prompt, index) => {
            return (
              <Fragment key={index}>
                <div>{prompt}</div>
                {index < week.length - 1 ? (
                  <div
                    style={{
                      fontFamily: "Gentium Book Basic",
                      fontStyle: "italic",
                      fontWeight: "bold",
                      padding: "1rem",
                    }}
                  >
                    or
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: ".5rem 1rem",
            fontFamily: "Gentium Book Basic",
            fontSize: "1rem",
          }}
          onClick={incrementCount}
        >
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default App;
