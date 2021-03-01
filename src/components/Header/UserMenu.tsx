import {
	faDiscord,
	faPatreon,
	faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Menu, Modal, Typography } from "antd";
import download from "downloadjs";
import React, { useCallback } from "react";
import { useGenerateKeyMutation, useUserQuery } from "../../graphql/generated";
import { useToggle } from "../../hooks/useToggle";

const buttonStyles: React.CSSProperties = {
	color: "#fff",
	height: 40,
	borderRadius: 5,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

export const UserMenu: React.FC = () => {
	const { data } = useUserQuery();
	const user = data?.user;
	const [generateKey] = useGenerateKeyMutation();

	const [open, toggleOpen] = useToggle(false);

	const onClick = useCallback(() => {
		generateKey().then(({ data: x }) => {
			download(x!.generateKey!, "FAF99301.lua");
		});
	}, [generateKey]);

	return user ? (
		<Menu mode="horizontal" theme="dark" selectedKeys={[]}>
			<Menu.Item>
				<Typography.Link
					href={`${process.env.REACT_APP_BACKEND_URL}/auth/logout`}
				>
					Hi{" "}
					{user.providers.patreon?.username ||
						user.providers.twitch?.username ||
						user.providers.discord?.username}
				</Typography.Link>
			</Menu.Item>
			<Menu.Item onClick={onClick}>Download Key</Menu.Item>
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
						href={`${process.env.REACT_APP_BACKEND_URL}/auth/patreon`}
						style={{ ...buttonStyles, backgroundColor: "#FF424D" }}
					>
						<FontAwesomeIcon style={{ marginRight: 8 }} icon={faPatreon} />
						Login with Patreon
					</Typography.Link>

					<Typography.Link
						href={`${process.env.REACT_APP_BACKEND_URL}/auth/twitch`}
						style={{ ...buttonStyles, backgroundColor: "#9146ff" }}
					>
						<FontAwesomeIcon style={{ marginRight: 8 }} icon={faTwitch} />
						Login with Twitch
					</Typography.Link>

					<Typography.Link
						href={`${process.env.REACT_APP_BACKEND_URL}/auth/discord`}
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
