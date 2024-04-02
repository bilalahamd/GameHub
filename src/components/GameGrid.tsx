import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

import { gameQuery } from "../App";
interface Props {
  gameQuery: gameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error}</Text>;

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
