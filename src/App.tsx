import { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import RightTierQuestionaire from "./components/RightTierQuestionaire";
import TierList from "./components/TierList/TierList";
import Restos, { RestoCode } from "./data/Restos";
import { TierName, TierNames } from "./data/TierColors";
import useTierRestosMap from "./hooks/useTierRestosMap";
import useUser from "./hooks/useUser";
import useVotes from "./hooks/useVotes";

import mixpanel from "mixpanel-browser";
import CopyUrl from "./components/CopyUrl";

const PageContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	background-color: #282828;

	box-sizing: border-box;
	padding: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 30px;
`;

function App() {
	const [questionaireShown, setQuestionaireShown] = useState(false);
	const [questionaireRestoInfo, setQuestionaireRestoInfo] = useState(
		Restos["AGORA"]
	);

    const user = useUser();

	useEffect(() => {
		mixpanel.init("d3798361742843ad496fbf9ea4757474", { debug: true });
		mixpanel.identify(user);
	});

	const [tierRestosMap, setTierRestosMap] = useTierRestosMap();
	const [isVoted, addVote] = useVotes(setTierRestosMap, user);

	function onRestoClick(restoCode: RestoCode) {
		mixpanel.track("resto click", {
			restoCode,
			currentTier: TierNames.find((tierName) =>
				tierRestosMap[tierName].includes(restoCode)
			),
			voted: isVoted(restoCode),
		});

		setQuestionaireRestoInfo(Restos[restoCode]);
		return setQuestionaireShown(true);
	}

	return (
		<>
			<PageContainer>
				<Logo />
				<div
					style={{
						fontFamily: "arial",
						fontSize: "12px",
						color: "#b4b4b4",
					}}
				>CLICK RESTO TO SUGGEST TIER CHANGE</div>
				<TierList
					onRestoClick={onRestoClick}
					tierRestosMap={tierRestosMap}
				/>
                <CopyUrl />
			</PageContainer>
			{questionaireShown && (
				<RightTierQuestionaire
					onCloseClick={() => {
						setQuestionaireShown(false);
					}}
					onTierNameClick={(newTier: TierName) => {
						addVote(questionaireRestoInfo["restoCode"], newTier);
						alert("suggestion successfully recorded!");
						setQuestionaireShown(false);
					}}
					restoInfo={questionaireRestoInfo}
					voted={isVoted(questionaireRestoInfo["restoCode"])}
				/>
			)}
		</>
	);
}

export default App;
