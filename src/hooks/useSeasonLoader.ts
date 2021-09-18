import { Season } from "../types/Season";
import abridge from "../functions/abridge";
import shuffle from "../functions/shuffle";
import { useCallback } from "react";
import useFleeting from "./useFleeting";

export default () => {
  const isFleeting = useFleeting();
  return useCallback(
    (season: Season, protectedIndices: number[], rejectedIndices: number[]) =>
      shuffle(
        isFleeting
          ? abridge(season, 5, protectedIndices, rejectedIndices)
          : season
      ),
    [isFleeting]
  );
};
