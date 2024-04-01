import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sort: string) => void;
  sortOrder: string;
}

const SortOrderSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.value}
            onClick={() => onSelectSortOrder(sort.value)}
            value={sort.value}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrderSelector;
