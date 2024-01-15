import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Logo from '../Logo';
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "../Icons";
import UseThemeSwitcher from "@/hooks/useThemeSwitcher";
import SidebarContainer from "@/containers/SidebarContainer";
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
			setShowBackground(true);
		});

		window.addEventListener(
			"scroll",
			_.debounce(() => {
				setShowBackground(false);
			}, 1000)
		);

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
				{/* <Logo /> */}
				Logo
			</div>

			<nav className='flex flex-row items-center justify-center gap-4'>
				<div
					onClick={microsoftSignInStart}
					className='flex flex-row items-center justify-center whitespace-nowrap bg-blueGray-500 text-white font-bold text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 bg-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
          hover:dark:bg-dark hover:dark:text-light hover:dark:border-light group gap-2 cursor-pointer'
				>
					<svg
						className='w-[25px] h-[25px] fill-light dark:fill-dark group-hover:fill-dark dark:group-hover:fill-light'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
					>
						Sign in
						<path d='M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z' />
					</svg>
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
			</nav>
		</nav>
	);
}
