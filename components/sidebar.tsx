import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Item = ({ title, to, icon, selected, setSelected }:any) => {
  return (
    <MenuItem
      active={selected === title}
      style={{color: "e0e0e0", margin:"10px 0 20px 0"}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link href={"#"} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const {data:session} = useSession()

  return (
    <>
      <div className="h-screen">
      <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#1F2A40 !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{backgroundColor:"e0e0e0"}}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color="#e0e0e0" marginY={"20px"}>
                  {session?.user.name}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  width="100"
                  height="100"
                  src={`https://ik.imagekit.io/ku9epk6lrv/user.png?updatedAt=1701280525246`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color="#e0e0e0"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {session?.user.name}
                </Typography>
                <Typography variant="h5" color="#4cceac">
                  Smart Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#a3a3a3"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Motor"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <button className="bg-red-500 p-2 rounded-md" onClick={() => signOut()}>
              Logout
            </button>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
      </div>
    </>
  );
};

export default Sidebar;
