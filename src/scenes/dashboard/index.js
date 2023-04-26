import { Box } from "@mui/material";
import Header from "../../components/Header";
export default function DashBoard() {
  return (
    <Box m="28px">
      <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
    </Box>
  );
}
