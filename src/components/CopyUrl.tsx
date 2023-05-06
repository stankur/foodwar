import mixpanel from "mixpanel-browser";
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

function CopyUrl() {
	return (
		<CopyUrlContainer>
			<GrowingInput readOnly />
			<CopyText
				onClick={() => {
					mixpanel.track("copy link");
					navigator.clipboard.writeText(
						"https://stankur.github.io/foodwar"
					);
					alert("copied to clipboard");
				}}
			>
				copy
			</CopyText>
		</CopyUrlContainer>
	);
}

export default CopyUrl;
