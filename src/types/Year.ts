import { Season } from "./Season";

export type Year = null | {
  spring: Season;
  summer: Season;
  fall: Season;
  winter: Season;
};
