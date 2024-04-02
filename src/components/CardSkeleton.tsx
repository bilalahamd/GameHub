import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
