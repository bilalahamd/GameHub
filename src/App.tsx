import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformsSelector from "./components/PlatformsSelector";
import Navbar from "./components/Navbar";
import { Platform } from "./hooks/useGame";
import SortOrderSelector from "./components/SortOrderSelector";
import GameHeading from "./components/GameHeading";
export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main "`,
      }}
      gridAutoColumns={{
        base: "1fr",
        lg: "200px  1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} marginBottom={5} paddingLeft={2}>
          <PlatformsSelector
            onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform}
          />
          <SortOrderSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
