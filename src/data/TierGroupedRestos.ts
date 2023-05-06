import Restos, { RestoCode } from "./Restos";
import { TierName } from "./TierColors";

let TierRestosMap: { [key in TierName]: RestoCode[] } = {
	S: ["AGORA", "NORI", "ORIGINAL", "SPROUTS", "ONLYU"],
	A: [
		"KINTON",
		"KOKORO",
		"WILDLIGHT",
		"YUNSHANG",
		"BLUECHIP",
		"DONAIR",
		"RYUU",
		"OPEN",
		"CORNER",
		"JAMJAR",
		"MIYAMAE",
		"TACO",
		"RAIN",
		"BEAN",
		"DANE",
		"SUBWAY",
		"KOERNER",
		"GALLERY",
	],
	B: [
		"BLENZ",
		"BROWNS",
		"BIERCRAFT",
		"CHEF",
		"DELLY",
		"MCD",
		"BOULEVARD",
		"FLAVOUR",
		"JJ",
		"TIM",
		"PORCH",
		"FATIH",
		"PITA",
		"FRESHSLICE",
		"LOAFE",
		"GATHER",
		"FOODIEPOWER",
		"CHATIME",
		"STEVES",
		"PIZZA",
		"PHO",
		"TRIPLE",
		"A&W",
		"KUNGFU",
		"STARBUCKS",
	],
	C: [
		"MYHOME",
		"DOWNLOW",
		"HONOUR",
		"NEPTUNE",
		"PEARL",
		"MERCANTE",
		"POKE",
		"LAW",
	],
	D: ["SESAME", "BOOSTER", "STIR", "IKE"],
	F: ["PERUGIA", "POINT", "FEAST", "EMPORIUM", "BENTO"],
};

let restosset = new Set(Object.keys(Restos));
let TierRestosSet = new Set(
	Object.values(TierRestosMap).flatMap((e) => e)
) as Set<string>;

function getDifference(setA: Set<string>, setB: Set<string>) {
	return new Set([...(setA as any)].filter((element) => !setB.has(element)));
}

console.log(getDifference(restosset, TierRestosSet));

