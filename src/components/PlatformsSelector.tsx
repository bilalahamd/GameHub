import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../services/api-client";
import usePlatform from "../hooks/usePlatform";
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformsSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelect(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;
