import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "../Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import UseThemeSwitcher from "@/hooks/useThemeSwitcher";
import SidebarContainer from "@/containers/SidebarContainer";
import Image from "next/image";
import _ from "lodash";

const CustomLink = ({ href, title, className }) => {
	const router = useRouter();

	return (
		<Link
			href={href}
			title={title}
			className={`${className} mx-4 relative group`}
		>
			{title}
			<span
				className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? "w-full" : "w-0"
				} dark:bg-light`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

export default function NavBar({ routesArr, navMode, microsoftSignInStart }) {
	const [mode, setMode] = UseThemeSwitcher(),
		[showBackground, setShowBackground] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setShowBackground(true) : setShowBackground(false);
		});

		return () => {
			window.removeEventListener("scroll", null);
		};
	}, []);

	return (
		<nav
			className={`w-full fixed z-20 px-32 py-8 font-medium flex items-center justify-between dark:text-light lg:px-16 md:px-12 sm:px-8 ${
				showBackground
					? "bg-light dark:bg-dark border-b shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div
				className={`w-full flex justify-between items-center lg:hidden ${
					navMode === "drawer" && "hidden"
				}`}
			>
				<nav>
					{routesArr.map((r, i) => (
						<CustomLink
							key={i}
							{...r}
						/>
					))}
				</nav>
			</div>

			<SidebarContainer
				navMode={navMode}
				routesArr={routesArr}
			/>
			<div className='absolute left-[50%] translate-x-[-50%]'>
				<Image
					src={Logo}
					alt='logo'
					className='w-[80px] h-[80px]'
					priority
				/>
			</div>

			<nav className='flex flex-row items-center justify-center gap-4'>
				<div
					onClick={microsoftSignInStart}
					className='flex flex-row items-center justify-center whitespace-nowrap bg-blueGray-500 text-white font-bold text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 bg-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
          hover:dark:bg-dark hover:dark:text-light hover:dark:border-light group gap-2 cursor-pointer'
				>
					<div>Sign in</div>
				</div>

				<button
					className={`flex w-[30px] h-[30px] items-center justify-center rounded-full p-1 ${
						mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
					}`}
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
				>
					{mode === "dark" ? (
						<MoonIcon className='fill-dark' />
					) : (
						<SunIcon className='fill-dark' />
					)}
				</button>
				<button
					className={`flex w-[35px] h-[35px] items-center justify-center rounded-full p-2 ${
						mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
					}`}
				>
					<FontAwesomeIcon icon={faShoppingCart} />
				</button>
			</nav>
		</nav>
	);
}
