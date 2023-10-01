import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";

import Logo from "../Logo";
import { Text } from "recharts";

function AppHeader() {
 


  return (
    <div className="AppHeader">
    <Logo size={"28px"}/>
      <Text fontSize={"30px"} fontWeight={"300"}>Admin Dashboard</Text>
     
    </div>
  );
}
export default AppHeader;
