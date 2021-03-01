import { createPnach } from "@valaxor/kh2fm-randomizer";
import { Button, Dropdown, Menu, message } from "antd";
import { MenuProps } from "antd/lib/menu";
import downloadjs from "downloadjs";
import React, { useCallback, useContext } from "react";
import {} from "react-apollo";
import { useHistory } from "react-router-dom";
import { SeedContext } from "../../context/seed";
import { firebase } from "../../firebase";
import { useCreateSeedMutation } from "../../graphql/generated";
import { useSeedURL } from "../../hooks/useSeedURL";
import { GoAModModalDownload } from "../GoAMod/GoAModModalDownload";

export const ButtonDownload: React.FC = () => {
	const {
		seed,
		loading,
		error,
		seedName: { name },
		configuration,
	} = useContext(SeedContext);
	const { push } = useHistory();

	const [createSeed] = useCreateSeedMutation();

	const { urlWithSettings: urlWithParams } = useSeedURL();

	const bind = useCallback(() => {
		const { name, ...config } = configuration;

		createSeed({
			variables: {
				name,
				configuration: config as any,
			},
		}).then(() => {
			message.success("Seed successfully bound!");
		});
	}, [createSeed, configuration]);

	const download = useCallback<NonNullable<MenuProps["onClick"]>>(
		async event => {
			const pnach = createPnach(seed!, configuration);

			downloadjs(pnach, event.key as string, "application/octet-stream");

			firebase.analytics().logEvent("seed_downloaded", {
				seed: configuration.name,
			});

			push(urlWithParams);
		},
		[seed, configuration, push, urlWithParams]
	);

	return (
		<div
			style={{
				display: "grid",
				margin: "8px 0",
				gridTemplateColumns: "20.7% 39% 39%",
				gap: 8,
			}}
		>
			<GoAModModalDownload />

			<Button onClick={bind} disabled={!seed}>
				Bind
			</Button>

			<Dropdown
				overlay={
					<Menu onClick={download}>
						<Menu.Item disabled>Choose a language patch</Menu.Item>
						<Menu.Item key="F266B00B.pnach">
							Xeeynamo's Rev 5/Japanese (F266B00B.pnach)
						</Menu.Item>
						<Menu.Item key="B7398B17.pnach">
							Sora6645's Rev 6 (B7398B17.pnach)
						</Menu.Item>
						<Menu.Item key="FAF99301.pnach">
							CrazyCatz's/Sora6645's Rev Final (FAF99301.pnach)
						</Menu.Item>
					</Menu>
				}
				disabled={!seed}
			>
				<Button type="primary" block>
					{!seed && !loading && !error && !name && "Give the Seed a name"}
					{!seed && loading && !error && name && "Generating Seed..."}
					{seed && !loading && !error && name && "Download Seed"}
					{!seed && !loading && error && name && "An error occurred!"}
				</Button>
			</Dropdown>
		</div>
	);
};
