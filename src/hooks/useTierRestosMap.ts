import { useEffect, useState } from "react";
import { RestoCode } from "../data/Restos";
import { TierName } from "../data/TierColors";

function useTierRestosMap(): [
	{
		S: RestoCode[];
		A: RestoCode[];
		B: RestoCode[];
		C: RestoCode[];
		D: RestoCode[];
		F: RestoCode[];
	},
	React.Dispatch<
		React.SetStateAction<{
			S: RestoCode[];
			A: RestoCode[];
			B: RestoCode[];
			C: RestoCode[];
			D: RestoCode[];
			F: RestoCode[];
		}>
	>
] {
	const [TierRestosMap, setTierRestosMap] = useState<{
		[key in TierName]: RestoCode[];
	}>({
		S: [],
		A: [],
		B: [],
		C: [],
		D: [],
		F: [],
	});

	useEffect(() => {
		fetch(
			"https://b2krgp9e08.execute-api.us-east-2.amazonaws.com/test/foodwar"
		)
			.then((response) => response.json())
			.then((response) => {
				console.log(response.body);
				return setTierRestosMap(response.body);
			});
	}, []);

	return [TierRestosMap, setTierRestosMap];
}

export default useTierRestosMap;
