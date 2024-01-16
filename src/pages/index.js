import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import productPic3 from "../../public/images/product-pic-3.jpg";
import productPic1 from "../../public/images/product-pic-1.jpg";
import { AnimatedTextTypeWriter } from "@/components/AnimatedText";
import PageTransition from "@/components/PageTransition";
import { raleway } from "@/styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import {
	productArr,
	taglineArr,
	productDescriptionArr,
} from "../content/content";
import ProductCard from "@/components/Card/ProductCard";
import CardWIthOverlay from "@/components/Card/CardWIthOverlay";

export default function Home() {
	const [mode, setMode] = useState("");

	useEffect(() => {
		setMode(window.localStorage.getItem("theme"));
	}, [mode]);

	return (
		<>
			<Head>
				<title>Home | Hive Haven</title>
				<meta
					name='description'
					content=''
				/>
			</Head>

			<PageTransition />
			<main className='flex flex-col items-center text-dark w-full min-h-screen dark:text-light'>
				{/* Section 1 */}
				<section className='relative w-full h-screen flex items-center'>
					<Image
						alt='beeswax wrapper'
						src={productPic3}
						fill
						className={`w-full h-screen flex items-center`}
					/>
					<div
						className={`w-full h-screen bg-gray-200 flex items-center`}
						style={{ backgroundImage: `url(${productPic3})` }}
					>
						<div className='w-1/2 h-screen bg-light dark:bg-dark opacity-90 flex flex-col items-center justify-center'>
							<div className='w-5/6 flex flex-col space-y-10'>
								<AnimatedTextTypeWriter
									text={`Newly Launched`}
									className={`${raleway.className} font-semibold italic text-3xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center`}
								/>
								<AnimatedTextTypeWriter
									text={`Hive Haven Beeswax Wraps`}
									className={`${raleway.className} font-black italic text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center`}
								/>
								<div>
									{taglineArr.map((e, i) => (
										<div
											key={i}
											className='flex flex-row items-center space-x-4'
										>
											<FontAwesomeIcon
												className='w-[15px] h-[15px]'
												icon={faBullseye}
											/>
											<div className='font-medium'>{e.title}</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className={`w-1/2 h-screen bg-primary opacity-70`}></div>
					</div>
				</section>

				{/* Section 2 */}
				<section className='w-full h-full flex justify-center py-24'>
					<div className='w-4/5 flex flex-col space-y-20 items-center top-10'>
						<AnimatedTextTypeWriter
							text='New Arrivals'
							className={`${raleway.className} font-black italic text-5xl xl:text-5xl lg:text-6xl md:text-4xl sm:text-3xl text-center`}
						/>

						<div className='w-4/5 sm:w-11/12 grid grid-cols-3 gap-4 xl:grid-cols-1 items-center'>
							{productArr.map((p, i) => (
								<ProductCard
									key={i}
									{...p}
								/>
							))}
						</div>
					</div>
				</section>

				{/* Section 3 */}
				<section className='w-full h-screen bg-gray-200 flex justify-center items-center relative z-0'>
					<Image
						alt='beeswax wrapper'
						src={productPic1}
						className={`w-full h-screen flex items-center`}
					/>
					<div className='bg-gradient-to-r from-light dark:from-dark absolute inset-0 h-screen flex flex-col items-center justify-center w-3/5'>
						<div className='flex flex-col space-y-10 px-16'>
							<AnimatedTextTypeWriter
								text={`Product Description`}
								className={`${raleway.className} font-semibold italic text-3xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center`}
							/>
							<p className='font-medium w-full md:text-sm text-left lg:text-center'>
								{`Beeswax wonders – the eco-chic solution to embrace a greener
								tomorrow. Crafted from nature's finest beeswax, our products not
								only protect your cherished items but also safeguard our planet.
								These enchanting beeswax wraps and containers wrap your goods in
								a warm embrace, keeping them fresh and guilt-free, while bidding
								farewell to single-use plastics. Elevate your sustainable
								lifestyle with a touch of buzzworthy elegance and show the world
								that eco-conscious living can be both exquisite and
								conscientious.`}
							</p>
						</div>
					</div>
				</section>

				{/* Section 4 */}
				<section className='w-full h-full flex justify-center py-24'>
					<div className='w-4/5 flex flex-col space-y-20 items-center top-10'>
						<AnimatedTextTypeWriter
							text={`Why Choose Hive Haven?`}
							className={`${raleway.className} font-black italic text-5xl xl:text-5xl lg:text-6xl md:text-4xl sm:text-3xl text-center`}
						/>

						<div className='w-4/5 sm:w-11/12 grid grid-cols-2 gap-4 xl:grid-cols-1 items-center'>
							{productDescriptionArr.map((p, i) => (
								<CardWIthOverlay
									{...p}
									key={i}
								/>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
