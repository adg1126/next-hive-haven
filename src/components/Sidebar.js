import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const CustomLinkMobile = (r) => {
	const router = useRouter();

	const handleRouteChange = () => {
		router.push(r.href);
		r.handleDrawerOpen(false);
	};

	return (
		<li
			onClick={handleRouteChange}
			title={r.title}
			className={`${r.className} flex flex-row mx-4 items-center relative group`}
		>
			{/* {r?.icon()} */}
			<div className='mx-5 flex flex-col'>
				<p>{r.title}</p>
				<span
					className={`h-[1px] inline-block bg-dark group-hover:w-full transition-[width] ease duration-300 ${
						router.asPath === r.href ? "w-full" : "w-0"
					} dark:bg-light`}
				>
					&nbsp;
				</span>
			</div>
		</li>
	);
};

export default function Sidebar({
	routesArr,
	navMode,
	drawerOpen,
	setDrawerOpen,
}) {
	const handleDrawerOpen = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<>
			<button
				onClick={handleDrawerOpen}
				className={`flex-col justify-center items-center lg:flex ${
					navMode === "drawer" ? "flex" : "hidden"
				}`}
			>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-200 ${
						drawerOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-200 my-0.5 ${
						drawerOpen ? "opacity-0" : "opacity-1"
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-200 ${
						drawerOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
					}`}
				></span>
			</button>
			{drawerOpen && (
				<motion.div
					initial={{ opacity: 0, x: "-50%" }}
					animate={{
						opacity: 1,
						x: 0,
						duration: 1,
						transition: { delay: 0.4 },
					}}
					className='fixed flex flex-col top-0 left-0 z-40 h-screen p-4 bg-light w-[17vw] lg:w-[27vw] md:w-[60vw] dark:bg-dark shadow-lg border-r translate-x-1/2'
				>
					<div className='w-full flex flex-row justify-between'>
						<h5
							id='drawer-navigation-label'
							className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
						>
							Menu
						</h5>
						<button
							onClick={handleDrawerOpen}
							className={`flex-col justify-center items-center lg:flex ${
								navMode === "drawer" ? "flex" : "hidden"
							}`}
						>
							<span
								className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-200 ${
									drawerOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
								}`}
							></span>
							<span
								className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 duration-200 ${
									drawerOpen ? "opacity-0" : "opacity-1"
								}`}
							></span>
							<span
								className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-200 ${
									drawerOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
								}`}
							></span>
						</button>
					</div>
					<div className='py-4'>
						<ul className='flex flex-col items-start justify-center flex-wrap gap-y-4'>
							{routesArr.map((r, i) => (
								<CustomLinkMobile
									key={i}
									{...{ ...r, handleDrawerOpen }}
								/>
							))}
						</ul>
					</div>
				</motion.div>
			)}
		</>
	);
}
