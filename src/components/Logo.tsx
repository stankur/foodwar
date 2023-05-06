import styled from "styled-components";

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`;

function Logo() {
	return (
		<LogoContainer>
			<img src="./images/mbc.svg" alt="mbc logo" width="90px" />
			<span
				style={{
					fontFamily: "arial",
					fontWeight: "600",
					fontSize: "20px",
					color: "white",
				}}
			>
				ULTIMATE UBC FOOD WAR
			</span>
		</LogoContainer>
	);
}

export default Logo;
