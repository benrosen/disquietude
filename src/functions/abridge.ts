import shuffle from "./shuffle";

export default <T extends any[]>(
  items: T,
  reduction: number,
  protectedIndices: number[] = [],
  rejectedIndices: number[] = []
): T => {
  rejectedIndices = rejectedIndices.filter(
    (value) => !protectedIndices.includes(value)
  );
  return [
    ...shuffle(
      items
        .filter(
          (_value, index) =>
            !(
              protectedIndices.includes(index) ||
              rejectedIndices.includes(index)
            )
        )
        .map((value, index) => ({ index, value }))
    )
      .slice(reduction - rejectedIndices.length)
      .map(({ index }) => index),
    ...protectedIndices,
  ].map((value) => items[value]) as T;
};
