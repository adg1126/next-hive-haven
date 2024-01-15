import { Montserrat, Raleway } from "next/font/google";

export const monsterrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-mont",
});

export const raleway = Raleway({
	style: ["normal", "italic"],
	weight: ["500", "900"],
	subsets: ["latin"],
	variable: "--font-raleway",
});
