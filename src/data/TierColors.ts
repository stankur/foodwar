export type TierName = "S" | "A" | "B" | "C" | "D" | "F";

let TierNameColorMap: { [key in TierName]: `#${string}` } = {
	S: `#${"FF7F7F"}`,
	A: `#${"FFBF7F"}`,
	B: `#${"FFFF7F"}`,
	C: `#${"7FFF7F"}`,
	D: `#${"7FBFFF"}`,
	F: `#${"FF7FFF"}`,
};

let TierNames: TierName[] = ["S", "A", "B", "C", "D", "F"];

export { TierNames };

export default TierNameColorMap;
