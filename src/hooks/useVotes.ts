import { useEffect, useState } from "react";
import { RestoCode } from "../data/Restos";
import { TierName } from "../data/TierColors";

function useVotes(
	setTierRestosMap: React.Dispatch<
		React.SetStateAction<{
			S: RestoCode[];
			A: RestoCode[];
			B: RestoCode[];
			C: RestoCode[];
			D: RestoCode[];
			F: RestoCode[];
		}>
	>,
	user: string
): [
	(restocode: RestoCode) => boolean,
	(restocode: RestoCode, tier: TierName) => void
] {
	const [votes, setVotes] = useState<
		Partial<{ [key in RestoCode]: TierName }>
	>(() => {
		let possiblyVotes = localStorage.getItem("votes");

		if (possiblyVotes) {
			let parsedVotes = JSON.parse(possiblyVotes);
			return parsedVotes;
		}

		localStorage.setItem("votes", "{}");

		return {};
	});

	function isVoted(restocode: RestoCode) {
		return restocode in votes;
	}

	function addVote(restocode: RestoCode, tier: TierName) {
		fetch(
			"https://b2krgp9e08.execute-api.us-east-2.amazonaws.com/test/foodwar",
			{
				method: "POST",
				body: JSON.stringify({ user, rating: tier, restocode }),
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				localStorage.setItem(
					"votes",
					JSON.stringify({ ...votes, [restocode]: tier })
				);

				setVotes({ ...votes, [restocode]: tier });

				return response;
			})
			.then((response) => {
				console.log(response.body);
				setTierRestosMap(response.body);
			})
			.catch(() => console.log("error encountered while posting vote"));
	}

	return [isVoted, addVote];
}

export default useVotes;
