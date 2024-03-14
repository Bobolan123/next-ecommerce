"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteCookie, getCookie } from "cookies-next";

const NoSSR = dynamic(() => import("./_profile/modelProfile/ModelProfile"), {
  ssr: false,
});

const pages = [
  ["Home", ""],
  ["IT jobs", "job"],
  ["Top IT company", "company"],
];

const settings = ["Profile", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [isLogin, setIsLogin] = useState(false);

  const [openProfile, setOpenProfile] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = (titleProfile: string) => {
    if (titleProfile === "Profile") {
      setOpenProfile(true);
    }

    if (titleProfile === "Dashboard") {
    }
    if (titleProfile === "Logout") {
      deleteCookie("jwt");
      setIsLogin(false);
    }
  };

  const handlePopDownProfile = () => {
    setOpenProfile(false);
  };

  useEffect(() => {
    const jwt = getCookie("jwt");
    if (jwt) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <div>
      <ToastContainer />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGAN
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page[1]} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page[1]}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page[1]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link href={`/${page[1].toLowerCase()}`}>{page[0]}</Link>
                </Button>
              ))}
            </Box>
            {isLogin ? (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Tooltip title="Open settings">
                    <p className="text-white">Profile</p>
                  </Tooltip>
                </IconButton>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Button onClick={() => handleLogOut(setting)}>
                          {setting}
                        </Button>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box>
                <Link href={"/login"} className="text-xl ">
                  Login
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <NoSSR
        openProfile={openProfile}
        handlePopDownProfile={handlePopDownProfile}
      />{" "}
      {/* Model profile */}
    </div>
  );
}
export default ResponsiveAppBar;
