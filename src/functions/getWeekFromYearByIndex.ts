import { Week } from "../types/Week";
import { Year } from "../types/Year";

export default (index: number, year: Year): Week =>
  year && index >= 0 && index < 52
    ? [...year.spring, ...year.summer, ...year.fall, ...year.winter][index]
    : [];
