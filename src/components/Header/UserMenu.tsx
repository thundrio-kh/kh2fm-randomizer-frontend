import {
	faDiscord,
	faPatreon,
	faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Menu, Modal, Typography } from "antd";
import React from "react";
import { useUser } from "../../context/user/useUser";
import { useToggle } from "../../hooks/useToggle";

const buttonStyles: React.CSSProperties = {
	// padding: 8,
	color: "#fff",
	height: 40,
	borderRadius: 5,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

export const UserMenu: React.FC = () => {
	const user = useUser();
	const [open, toggleOpen] = useToggle(false);

	return user ? (
		<Menu mode="horizontal" theme="dark" selectedKeys={[]}>
			<Menu.Item>
				Hi{" "}
				{user.providers.patreon?.username ||
					user.providers.twitch?.username ||
					user.providers.discord?.username}
			</Menu.Item>
		</Menu>
	) : (
		<>
			<Menu mode="horizontal" theme="dark" selectedKeys={[]}>
				<Menu.Item onClick={toggleOpen}>Log In</Menu.Item>
			</Menu>

			<Modal
				title="Log In"
				visible={open}
				onOk={toggleOpen}
				onCancel={toggleOpen}
				centered
				footer={<Button onClick={toggleOpen}>Cancel</Button>}
			>
				<div
					style={{
						display: "grid",
						gridGap: 12,
					}}
				>
					<Typography.Link
						href="http://localhost:5000/auth/patreon"
						style={{ ...buttonStyles, backgroundColor: "#FF424D" }}
					>
						<FontAwesomeIcon style={{ marginRight: 8 }} icon={faPatreon} />
						Login with Patreon
					</Typography.Link>

					<Typography.Link
						href="http://localhost:5000/auth/twitch"
						style={{ ...buttonStyles, backgroundColor: "#9146ff" }}
					>
						<FontAwesomeIcon style={{ marginRight: 8 }} icon={faTwitch} />
						Login with Twitch
					</Typography.Link>

					<Typography.Link
						href="http://localhost:5000/auth/discord"
						style={{ ...buttonStyles, backgroundColor: "#7289DA" }}
					>
						<FontAwesomeIcon style={{ marginRight: 8 }} icon={faDiscord} />
						Login with Discord
					</Typography.Link>
				</div>
			</Modal>
		</>
	);
};
