import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};