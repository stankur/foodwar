import styled from "styled-components";
import { RestoInfo } from "../data/Restos";
import TierNameColorMap, { TierName, TierNames } from "../data/TierColors";

const RightTierQuestionaireContainer = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;

	transform: translateX(-50%) translateY(-50%);

	box-shadow: 0 0 30px black;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	box-sizing: border-box;

	padding: 10px;

	background-color: #97d4e9;
`;

const XContainer = styled.div`
	font-family: Arial;
	font-size: 20px;
	font-weight: bold;

	align-self: flex-end;

    cursor: pointer;
`;

const QuestionContainer = styled.div`
	font-family: Arial;
	font-size: 20px;
	font-weight: bold;
    text-align: center;
`;

interface RightTierQuestionaireProps {
	onCloseClick: () => void;
	onTierNameClick: (newTierName: TierName) => void;
	restoInfo: RestoInfo;
	voted: boolean;
}

function RightTierQuestionaire({
	onCloseClick,
	onTierNameClick,
	restoInfo,
	voted,
}: RightTierQuestionaireProps) {
	return (
		<RightTierQuestionaireContainer>
			<XContainer onClick={onCloseClick}>×</XContainer>
			{voted ? (
				<QuestionContainer>
					You have voted for{" "}
					{
						<span style={{ fontStyle: "italic" }}>
							{restoInfo["restoName"]}
						</span>
					}
					.
				</QuestionContainer>
			) : (
				<QuestionContainer>
					What is the right tier for{" "}
					{
						<span style={{ fontStyle: "italic" }}>
							{restoInfo["restoName"]}
						</span>
					}
					?
				</QuestionContainer>
			)}
			{!voted && (
				<TierChoicesContainer>
					{TierNames.map((tierName) => (
						<TierChoice
							onClick={onTierNameClick}
							tierName={tierName}
						/>
					))}
				</TierChoicesContainer>
			)}
		</RightTierQuestionaireContainer>
	);
}

const TierChoicesContainer = styled.div`
	display: flex;
	gap: 5px;

    cursor: pointer;
`;

interface TierChoiceContainerProps {
	backgroundColor: `#${string}`;
}

const TierChoiceContainer = styled.div<TierChoiceContainerProps>`
	width: 45px;
	height: 45px;
	background-color: ${(props) => props.backgroundColor};

	display: flex;
	align-items: center;
	justify-content: center;

	&:active {
		filter: brightness(50%);
	}
`;

interface TierChoiceProps {
	onClick: (newTier: TierName) => void;
	tierName: TierName;
}

function TierChoice({ onClick, tierName }: TierChoiceProps) {
	return (
		<TierChoiceContainer
			backgroundColor={TierNameColorMap[tierName]}
			onClick={() => onClick(tierName)}
		>
			<span
				style={{
					fontWeight: "bold",
					fontFamily: "arial",
					fontSize: "25px",
				}}
			>
				{tierName}
			</span>
		</TierChoiceContainer>
	);
}

export default RightTierQuestionaire;
