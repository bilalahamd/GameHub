import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import usePlatform from "../hooks/usePlatform";
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformsSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelect(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;
