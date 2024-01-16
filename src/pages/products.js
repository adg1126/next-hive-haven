import React from "react";
import Head from "next/head";
import { AnimatedTextTypeWriter } from "@/components/AnimatedText";
import PageTransition from "@/components/PageTransition";
import { raleway } from "@/styles/fonts";
import { productArr } from "../content/content";
import ProductCard from "@/components/Card/ProductCard";

export default function products() {
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
				<section className='w-full h-full flex justify-center py-24'>
					<div className='w-4/5 flex py-10 flex-col bg-white dark:bg-dark space-y-20 items-center top-10'>
						<AnimatedTextTypeWriter
							text='Beeswax Wrappers'
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
			</main>
		</>
	);
}
