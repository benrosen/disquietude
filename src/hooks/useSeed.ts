import { useEffect } from "react";
import { useParams } from "react-router-dom";
import seedrandom from "seedrandom";

export default () => {
  const { seed } = useParams<{ seed: string }>();
  useEffect(() => {
    seedrandom(seed, { global: true });
  }, [seed]);
};
