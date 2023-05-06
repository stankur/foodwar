import styled from "styled-components";
import { RestoCode, RestoInfo } from "../../data/Restos";

const TierContainer = styled.div`
	display: flex;
	gap: 5px;
    width: 100%;
`;

const ItemsContainer = styled.div`
	display: flex;
	gap: 5px;
    flex-wrap: wrap;
`;

interface LogoImageProps {
	src: string;
}

function attrsFunc(props: LogoImageProps) {
	return {
		src: props.src,
		alt: "logo of a resto",
	};
}
const LogoImage = styled.img.attrs<LogoImageProps>(attrsFunc)`
	width: 85px;
	height: 85px;

	&:active {
		filter: brightness(50%);
	}
`;

interface TierProps extends TierNameProps {
	restosInDescendingPopularity: RestoInfo[];
	onRestoClick: (restoCode: RestoCode) => void;
}

function Tier({
	tierLetter,
	backgroundColor,
	restosInDescendingPopularity,
	onRestoClick,
}: TierProps) {
	return (
		<TierContainer>
			<TierName
				tierLetter={tierLetter}
				backgroundColor={backgroundColor}
			/>
			<ItemsContainer>
				{restosInDescendingPopularity.map((resto) => (
					<LogoImage
						src={resto.imageSrc}
						key={resto.imageSrc}
						onClick={() => onRestoClick(resto.restoCode)}
					/>
				))}
			</ItemsContainer>
		</TierContainer>
	);
}

interface TierNameContainerProps {
	backgroundColor: `#${string}`;
}
const TierNameContainer = styled.div<TierNameContainerProps>`
	flex-basis: 85px;
    flex-grow: 0;
    flex-shrink: 0;

	align-self: stretch;
	min-height: 85px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.backgroundColor};
`;

const TierNameLetterContainer = styled.span`
	font-family: Arial;
	font-weight: bold;
	color: black;
	font-size: 50px;
`;

interface TierNameProps {
	tierLetter: string;
	backgroundColor: `#${string}`;
}

function TierName({ tierLetter, backgroundColor }: TierNameProps) {
	return (
		<TierNameContainer backgroundColor={backgroundColor}>
			<TierNameLetterContainer>{tierLetter}</TierNameLetterContainer>
		</TierNameContainer>
	);
}

export default Tier;
