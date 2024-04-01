import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem>
        <Skeleton height="32px" />
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
