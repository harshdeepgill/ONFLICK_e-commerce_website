import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";

import Logo from "../Logo";

function AppHeader() {
 


  return (
    <div className="AppHeader">
    <Logo size={40}/>
      <Typography.Text>Admin Dashboard</Typography.Text>
     
    </div>
  );
}
export default AppHeader;
