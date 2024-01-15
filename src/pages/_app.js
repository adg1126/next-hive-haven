import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import UserNavbar from "@/components/Navbar/UserNavbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { monsterrat } from "@/styles/fonts";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<main
				className={`${monsterrat.variable} font-mont dark:bg-dark bg-light w-full min-h-screen`}
			>
				<UserNavbar />
				<AnimatePresence mode='wait'>
					<Component {...pageProps} />
				</AnimatePresence>
				<Footer />
			</main>
		</Provider>
	);
}
