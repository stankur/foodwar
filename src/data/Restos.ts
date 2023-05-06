export type RestoCode =
	| "AGORA"
	| "A&W"
	| "BEAN"
	| "BIERCRAFT"
	| "BLENZ"
	| "BOOSTER"
	| "BOULEVARD"
	| "BENTO"
	| "BLUECHIP"
	| "BROWNS"
	| "CHATIME"
	| "CHEF"
	| "CORNER"
	| "DELLY"
	| "DONAIR"
	| "DOWNLOW"
	| "FEAST"
	| "FLAVOUR"
	| "FOODIEPOWER"
	| "FRESHSLICE"
	| "GALLERY"
	| "GATHER"
	| "EMPORIUM"
	| "DANE"
	| "HONOUR"
	| "IKE"
	| "JAMJAR"
	| "JJ"
	| "KINTON"
	| "KOKORO"
	| "KOERNER"
	| "KUNGFU"
	| "LAW"
	| "LOAFE"
	| "MCD"
	| "MERCANTE"
	| "MIYAMAE"
	| "MYHOME"
	| "NEPTUNE"
	| "NORI"
	| "ONLYU"
	| "OPEN"
	| "ORIGINAL"
	| "POINT"
	| "POKE"
	| "PEARL"
	| "PERUGIA"
	| "PHO"
	| "PITA"
	| "PIZZA"
	| "PORCH"
	| "RAIN"
	| "RYUU"
	| "SESAME"
	| "STIR"
	| "SPROUTS"
	| "STARBUCKS"
	| "STEVES"
	| "SUBWAY"
	| "TACO"
	| "TIM"
	| "TRIPLE"
	| "FATIH"
	| "WILDLIGHT"
	| "YUNSHANG";

function convertToSrc(name: string): `./images/logos/${string}.jpg` {
	return `./images/logos/${name}.jpg`;
}

export type RestoInfo = {
	imageSrc: `./images/logos/${string}.jpg`;
	restoName: string;
	restoCode: RestoCode;
};

let Restos: {
	[key in RestoCode]: RestoInfo;
} = {
	BENTO: {
		restoCode: "BENTO",
		imageSrc: convertToSrc("bento"),
		restoName: "Bento Sushi",
	},
	BLUECHIP: {
		restoCode: "BLUECHIP",
		imageSrc: convertToSrc("bluechip"),
		restoName: "Blue Chip",
	},
	DONAIR: {
		restoCode: "DONAIR",
		imageSrc: convertToSrc("donair"),
		restoName: "Donair Town",
	},
	GATHER: {
		restoCode: "GATHER",
		imageSrc: convertToSrc("gather"),
		restoName: "Gather",
	},
	LAW: {
		restoCode: "LAW",
		imageSrc: convertToSrc("lawcafe"),
		restoName: "Law Cafe",
	},
	MERCANTE: {
		restoCode: "MERCANTE",
		imageSrc: convertToSrc("mercante"),
		restoName: "Mercante",
	},
	MYHOME: {
		restoCode: "MYHOME",
		imageSrc: convertToSrc("myhomecuisine"),
		restoName: "My Home Cuisine",
	},
	NEPTUNE: {
		restoCode: "NEPTUNE",
		imageSrc: convertToSrc("neptune"),
		restoName: "Neptune Chinese",
	},
	OPEN: {
		restoCode: "OPEN",
		imageSrc: convertToSrc("ok"),
		restoName: "Open Kitchen",
	},
	ORIGINAL: {
		restoCode: "ORIGINAL",
		imageSrc: convertToSrc("originalbeanery"),
		restoName: "Original Beanery",
	},
	PEARL: {
		restoCode: "PEARL",
		imageSrc: convertToSrc("pearlfever"),
		restoName: "Pearl Fever",
	},
	RYUU: {
		restoCode: "RYUU",
		imageSrc: convertToSrc("ryuu"),
		restoName: "Ryuu",
	},
	AGORA: {
		imageSrc: convertToSrc("agora"),
		restoName: "Agora",
		restoCode: "AGORA",
	},
	"A&W": {
		imageSrc: convertToSrc("anw"),
		restoName: "A&W",
		restoCode: "A&W",
	},
	BEAN: {
		imageSrc: convertToSrc("beanaroundtheworld"),
		restoName: "Bean Around The World",
		restoCode: "BEAN",
	},
	BIERCRAFT: {
		imageSrc: convertToSrc("biercraft"),
		restoName: "Biercraft",
		restoCode: "BIERCRAFT",
	},
	BLENZ: {
		imageSrc: convertToSrc("blenz"),
		restoName: "Blenz Coffee",
		restoCode: "BLENZ",
	},
	BOOSTER: {
		imageSrc: convertToSrc("boosterjuice"),
		restoName: "Booster Juice",
		restoCode: "BOOSTER",
	},
	BOULEVARD: {
		imageSrc: convertToSrc("boulevard roasting"),
		restoName: "Boulevard Coffee Roasting Co.",
		restoCode: "BOULEVARD",
	},
	BROWNS: {
		imageSrc: convertToSrc("browns"),
		restoName: "Browns Socialhouse",
		restoCode: "BROWNS",
	},
	CHATIME: {
		imageSrc: convertToSrc("chatime"),
		restoName: "Chatime",
		restoCode: "CHATIME",
	},
	CHEF: {
		imageSrc: convertToSrc("chefhung"),
		restoName: "Chef Hung Taiwanese Beef Noodle",
		restoCode: "CHEF",
	},
	CORNER: {
		imageSrc: convertToSrc("corner"),
		restoName: "Corner Kitchen",
		restoCode: "CORNER",
	},
	DELLY: {
		imageSrc: convertToSrc("delly"),
		restoName: "The Delly",
		restoCode: "DELLY",
	},
	DOWNLOW: {
		imageSrc: convertToSrc("downlow"),
		restoName: "DownLow",
		restoCode: "DOWNLOW",
	},
	FEAST: {
		imageSrc: convertToSrc("feast"),
		restoName: "Feast",
		restoCode: "FEAST",
	},
	FLAVOUR: {
		imageSrc: convertToSrc("flavourlab"),
		restoName: "Flavour Lab",
		restoCode: "FLAVOUR",
	},
	FOODIEPOWER: {
		imageSrc: convertToSrc("foodiepower"),
		restoName: "Foodiepower Chinese",
		restoCode: "FOODIEPOWER",
	},
	FRESHSLICE: {
		imageSrc: convertToSrc("freshslice"),
		restoName: "Freshslice Pizza",
		restoCode: "FRESHSLICE",
	},
	GALLERY: {
		imageSrc: convertToSrc("gallery"),
		restoName: "Gallery Café",
		restoCode: "GALLERY",
	},
	EMPORIUM: {
		imageSrc: convertToSrc("gne"),
		restoName: "Grand Noodle Emporium",
		restoCode: "EMPORIUM",
	},
	DANE: {
		imageSrc: convertToSrc("greatdane"),
		restoName: "Great Dane",
		restoCode: "DANE",
	},
	HONOUR: {
		imageSrc: convertToSrc("honourroll"),
		restoName: "Honour Roll",
		restoCode: "HONOUR",
	},
	IKE: {
		imageSrc: convertToSrc("ike"),
		restoName: "Ike's Cafe",
		restoCode: "IKE",
	},
	JAMJAR: {
		imageSrc: convertToSrc("jamjar"),
		restoName: "Jamjar Canteen",
		restoCode: "JAMJAR",
	},
	JJ: {
		imageSrc: convertToSrc("jjbean"),
		restoName: "JJ Bean",
		restoCode: "JJ",
	},
	KINTON: {
		imageSrc: convertToSrc("kinton"),
		restoName: "Kinton Ramen",
		restoCode: "KINTON",
	},
	KOKORO: {
		imageSrc: convertToSrc("koto"),
		restoName: "Kokoro Mazesoba",
		restoCode: "KOKORO",
	},
	KOERNER: {
		imageSrc: convertToSrc("kp"),
		restoName: "Koerner's Pub",
		restoCode: "KOERNER",
	},
	KUNGFU: {
		imageSrc: convertToSrc("kungfu"),
		restoName: "Kung Fu Noodle",
		restoCode: "KUNGFU",
	},
	LOAFE: {
		imageSrc: convertToSrc("loafe"),
		restoName: "Loafe",
		restoCode: "LOAFE",
	},
	MCD: {
		imageSrc: convertToSrc("mcd"),
		restoName: "Mc Donald's",
		restoCode: "MCD",
	},
	MIYAMAE: {
		imageSrc: convertToSrc("miyamae"),
		restoName: "Miyamae Sushi",
		restoCode: "MIYAMAE",
	},
	NORI: {
		imageSrc: convertToSrc("nori"),
		restoName: "Nori",
		restoCode: "NORI",
	},
	ONLYU: {
		imageSrc: convertToSrc("onlyu"),
		restoName: "Only U",
		restoCode: "ONLYU",
	},
	POINT: {
		imageSrc: convertToSrc("point"),
		restoName: "The Point",
		restoCode: "POINT",
	},

	POKE: {
		imageSrc: convertToSrc("pacificpoke"),
		restoName: "Pacific Poke",
		restoCode: "POKE",
	},
	PERUGIA: {
		imageSrc: convertToSrc("perugia"),
		restoName: "Perugia",
		restoCode: "PERUGIA",
	},
	PHO: {
		imageSrc: convertToSrc("phowithus"),
		restoName: "Pho W Us",
		restoCode: "PHO",
	},
	PITA: {
		imageSrc: convertToSrc("pita"),
		restoName: "Pita Pit",
		restoCode: "PITA",
	},
	PIZZA: {
		imageSrc: convertToSrc("pizzagarden"),
		restoName: "Pizza Garden",
		restoCode: "PIZZA",
	},
	PORCH: {
		imageSrc: convertToSrc("porch"),
		restoName: "Porch",
		restoCode: "PORCH",
	},
	RAIN: {
		imageSrc: convertToSrc("raineorshine"),
		restoName: "Rain or Shine",
		restoCode: "RAIN",
	},
	SESAME: {
		imageSrc: convertToSrc("sesame"),
		restoName: "Sesame",
		restoCode: "SESAME",
	},
	STIR: {
		imageSrc: convertToSrc("siuc"),
		restoName: "Stir It Up Cafe",
		restoCode: "STIR",
	},
	SPROUTS: {
		imageSrc: convertToSrc("sprouts"),
		restoName: "Sprouts",
		restoCode: "SPROUTS",
	},
	STARBUCKS: {
		imageSrc: convertToSrc("starbucks"),
		restoName: "Starbucks",
		restoCode: "STARBUCKS",
	},
	STEVES: {
		imageSrc: convertToSrc("stevespoke"),
		restoName: "Steve's Poke",
		restoCode: "STEVES",
	},
	SUBWAY: {
		imageSrc: convertToSrc("subway"),
		restoName: "Subway",
		restoCode: "SUBWAY",
	},
	TACO: {
		imageSrc: convertToSrc("tacomio"),
		restoName: "Tacomio",
		restoCode: "TACO",
	},
	TIM: {
		imageSrc: convertToSrc("timhortons"),
		restoName: "Tim Hortons",
		restoCode: "TIM",
	},
	TRIPLE: {
		imageSrc: convertToSrc("tripleos"),
		restoName: "Triple O's",
		restoCode: "TRIPLE",
	},
	FATIH: {
		imageSrc: convertToSrc("unclefatihs"),
		restoName: "Uncle Fatih's",
		restoCode: "FATIH",
	},
	WILDLIGHT: {
		imageSrc: convertToSrc("wildlight"),
		restoName: "Wildlight",
		restoCode: "WILDLIGHT",
	},
	YUNSHANG: {
		imageSrc: convertToSrc("yunshangricenoodle"),
		restoName: "Yunshang Rice Noodle",
		restoCode: "YUNSHANG",
	},
};

export default Restos;
