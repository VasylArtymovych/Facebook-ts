import React, { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MessageIcon from "@mui/icons-material/Message";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  StyledHeader,
  HeaderLeft,
  HeaderSearch,
  HeaderMiddle,
  HeaderOptions,
  HeaderRight,
  HeaderInfo,
} from "./Header.styled";

interface IProps {
  children?: React.ReactNode;
}

const Header: FC<IProps> = () => {
  return (
    <StyledHeader as="header">
      <HeaderLeft>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="facebook"
        />
        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="search facebook" />
        </HeaderSearch>
      </HeaderLeft>

      <HeaderMiddle>
        <HeaderOptions active>
          <HomeIcon fontSize="large" />
        </HeaderOptions>
        <HeaderOptions>
          <OndemandVideoIcon fontSize="large" />
        </HeaderOptions>
        <HeaderOptions>
          <PeopleIcon fontSize="large" />
        </HeaderOptions>
        <HeaderOptions>
          <SportsEsportsIcon fontSize="large" />
        </HeaderOptions>
      </HeaderMiddle>

      <HeaderRight>
        <HeaderInfo>
          <Avatar
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf298b5feccb2eec0/6328b841e98aee49abf70cf6/Cristiano_Ronaldo_Portugal_2022.jpg?format=jpg"
            alt="avatar"
          />
          <h5>Yerim Junior</h5>
        </HeaderInfo>

        <IconButton aria-label="apps">
          <AppsIcon />
        </IconButton>

        <IconButton aria-label="Message">
          <MessageIcon />
        </IconButton>

        <IconButton aria-label="Forum">
          <ForumIcon />
        </IconButton>

        <IconButton aria-label="Notifications">
          <NotificationsIcon />
        </IconButton>

        <IconButton aria-label="ArrowDropDown">
          <ArrowDropDownIcon />
        </IconButton>
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;
