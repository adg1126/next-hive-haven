import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import productPic3 from "../../public/images/product-pic-3.jpg";
import {
	AnimatedTextSpring,
	AnimatedTextTypeWriter,
} from "@/components/AnimatedText";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { raleway } from "@/styles/fonts";

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
			<main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
				<Image
					alt='beeswax wrapper'
					src={productPic3}
					layout='fill'
					objectFit='cover'
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
						</div>
					</div>
					<div className={`w-1/2 h-screen bg-primary opacity-70`}></div>
				</div>
			</main>
		</>
	);
}
