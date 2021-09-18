import seedrandom from "seedrandom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { seed } = useParams<{ seed: string }>();
  useEffect(() => {
    seedrandom(seed, { global: true });
  }, [seed]);
};
