import Container from "./components/Container";
import { Fragment } from "react";
import IncrementButton from "./components/IncrementButton";
import Separator from "./components/Separator";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import useIncrement from "./hooks/useIncrement";
import useSeed from "./hooks/useSeed";
import useWeek from "./hooks/useWeek";
import useYear from "./hooks/useYear";

export default () => {
  useSeed();
  const [count, increment] = useIncrement();
  const [year, yearLength] = useYear();
  const week = useWeek(count, year);
  return (
    <Container>
      <Title>Disquietude</Title>
      <Subtitle>
        {
          ["\u2665", "\u2666", "\u2663", "\u2660"][
            Math.floor((count / yearLength) * 4)
          ]
        }
      </Subtitle>
      <div style={{ padding: "2rem" }}>
        {week &&
          week.map((prompt, index) => (
            <Fragment key={index}>
              {prompt}
              {index < week.length - 1 ? <Separator /> : null}
            </Fragment>
          ))}
      </div>
      <IncrementButton onClick={increment} />
    </Container>
  );
};
