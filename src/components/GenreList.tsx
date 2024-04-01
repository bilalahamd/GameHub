import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "../hooks/useGenre";
interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genre
      </Heading>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {data.map((g) => (
          <ListItem paddingY={5} key={g.id}>
            <HStack>
              <Image
                src={getCroppedImage(g.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelect(g)}
                colorScheme="green"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
