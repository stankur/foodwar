import styled from "styled-components";
import Restos, { RestoCode } from "../../data/Restos";
import TierNameColorMap, { TierName } from "../../data/TierColors";
import Tier from "./Tier";

const TierListContainer = styled.div`
	max-width: 750px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	gap: 5px;
`;

interface TierListProps {
	onRestoClick: (restoCode: RestoCode) => void;
	tierRestosMap: {
		S: RestoCode[];
		A: RestoCode[];
		B: RestoCode[];
		C: RestoCode[];
		D: RestoCode[];
		F: RestoCode[];
	};
}
function TierList({ onRestoClick, tierRestosMap }: TierListProps) {

	return (
		<TierListContainer>
			{(Object.keys(TierNameColorMap) as TierName[]).map((tierName) => (
				<Tier
					onRestoClick={onRestoClick}
					tierLetter={tierName}
					backgroundColor={TierNameColorMap[tierName]}
					restosInDescendingPopularity={tierRestosMap[tierName].map(
						(restoCode) => {
                            return Restos[restoCode]
                        }
					)}
				/>
			))}
		</TierListContainer>
	);
}

export default TierList;
