import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const AntdMenu = () => {
	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	return (
		<Menu mode="horizontal">
			<SubMenu title={<span>Blogs</span>}>
				<MenuItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</MenuItemGroup>
				<MenuItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</MenuItemGroup>
			</SubMenu>
		</Menu>
	);
};
export default AntdMenu;
