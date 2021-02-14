import { Layout, Menu } from "antd";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserMenu } from "./UserMenu";

const navItems: { url: string; content: React.ReactNode }[] = [
	{
		content: (
			<>
				KH2FM Randomizer <sup>beta</sup>
			</>
		),
		url: "/seed",
	},
	{
		content: "About",
		url: "/about",
	},
	{
		content: "Changelog",
		url: "/changelog",
	},
	{
		content: "Support the Project",
		url: "/support",
	},
];

export const Header: React.FC = () => {
	const { pathname } = useLocation();

	const selected = pathname.startsWith("/seed") ? "/seed" : pathname;

	return (
		<Layout.Header style={{ padding: 0 }}>
			<div
				style={{
					margin: "0 auto",
					maxWidth: 1200,
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Menu mode="horizontal" theme="dark" selectedKeys={[selected]}>
					{navItems.map(({ url, content }) => (
						<Menu.Item key={url}>
							<NavLink to={url}>{content}</NavLink>
						</Menu.Item>
					))}
				</Menu>

				<UserMenu />
			</div>
		</Layout.Header>
	);
};
