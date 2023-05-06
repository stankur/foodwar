import mixpanel from "mixpanel-browser";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CopyUrlContainer = styled.div`
	width: 100%;
	max-width: 750px;

	display: flex;

	align-self: center;

	gap: 5px;
`;

const CopyText = styled.div`
	background-color: #b1b0b0;

	box-sizing: border-box;

	font-family: Arial;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;

	cursor: pointer;

	&:active {
		filter: brightness(50%);
	}
`;

const GrowingInput = styled.input.attrs(() => ({
	type: "text",
	value: "https://stankur.github.io/foodwar",
}))`
	flex-grow: 1;

	font-family: Arial;
	padding: 10px;

	color: #b4b4b4;

	background-color: #414141;

	border: none !important;
`;

const CopiedAlert = styled.div`
	width: 100%;
	max-width: 750px;

	background-color: #606060;

	font-family: Arial;
	padding: 10px;

	color: #b4b4b4;

	box-sizing: border-box;
	align-self: center;
`;

function CopyUrl() {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			setTimeout(() => setCopied(false), 5000);
		}
	});

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: "5px",
			}}
		>
			{copied && <CopiedAlert>copied</CopiedAlert>}
			<CopyUrlContainer>
				<GrowingInput readOnly />
				<CopyText
					onClick={() => {
						setCopied(true);
						navigator.clipboard.writeText(
							"https://stankur.github.io/foodwar"
						);
						mixpanel.track("copy link");
					}}
				>
					copy
				</CopyText>
			</CopyUrlContainer>
		</div>
	);
}

export default CopyUrl;
