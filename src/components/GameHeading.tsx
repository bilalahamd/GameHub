import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
interface Props {
  gameQuery: gameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={2}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
