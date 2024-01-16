import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnimatedTextTypeWriter } from "@/components/AnimatedText";
import PageTransition from "@/components/PageTransition";
import { raleway } from "@/styles/fonts";
import { productArr } from "../../content/content";
import ProductCard from "@/components/Card/ProductCard";

export default function Product() {
	const router = useRouter();
	const productId = router.query.productId;

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
				<section className='w-4/5 h-full flex justify-center py-24'>
					<div className='w-1/2 flex p-10 flex-col bg-white dark:bg-dark space-y-20 items-center top-10'>
						{productArr.map((p, i) =>
							p.href.slice(10) === productId ? (
								<Image
									key={i}
									src={p.img}
									alt='productPic3'
									className='w-full border rounded-lg shadow-2xl lg:w-full md:inline-block md:w-full'
									priority
									sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw'
								/>
							) : null
						)}
					</div>
					<div className='w-1/2 flex flex-col p-10 bg-white dark:bg-dark space-y-6 items-start top-10'>
						<AnimatedTextTypeWriter
							text='Beeswax Wrappers'
							className={`${raleway.className} font-black italic text-5xl xl:text-5xl lg:text-6xl md:text-4xl sm:text-3xl text-left`}
						/>
						{productArr.map((p, i) =>
							p.href.slice(10) === productId ? (
								<AnimatedTextTypeWriter
									key={i}
									text={p.price}
									className={`${raleway.className} font-semibold italic text-3xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center`}
								/>
							) : null
						)}

						<p className='pr-10 font-medium w-full md:text-sm text-left lg:text-center'>
							{`Beeswax wonders – the eco-chic solution to embrace a greener tomorrow. Crafted from nature's finest beeswax, our products not only protect your cherished items but also safeguard our planet. These enchanting beeswax wraps and containers wrap your goods in a warm embrace, keeping them fresh and guilt-free, while bidding farewell to single-use plastics. Elevate your sustainable lifestyle with a touch of buzzworthy elegance and show the world that eco-conscious living can be both exquisite and conscientious.`}
						</p>

						<div
							onClick={(e) => {}}
							className='flex flex-row whitespace-nowrap bg-blueGray-500 text-white font-bold text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 bg-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
          hover:dark:bg-dark hover:dark:text-light hover:dark:border-light group gap-2 cursor-pointer'
						>
							<div>Add to Cart</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
