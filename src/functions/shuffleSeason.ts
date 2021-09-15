import { Season } from "../types/Season";
import shuffle from "./shuffle";

export default (season: Season): Season => shuffle<Season>(season);
