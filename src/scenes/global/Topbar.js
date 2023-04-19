import { Box, IconButton, Icon, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.pallette.mode);
  // const colorMode = useContext(ColorModeContext);
  return (
    <Box>
      <Icon></Icon>
    </Box>
  );
};
export default Topbar;
