import React from "react";
import Head from "next/head";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import {
	AnimatedTextSpring,
	AnimatedTextTypeWriter,
} from "@/components/AnimatedText";
import AnimatedList from "@/components/List/AnimatedList";
import { raleway } from "@/styles/fonts";

import { teamArr } from "@/content/content";

export default function team() {
	return (
		<>
			<Head>
				<title>About | Hive Haven</title>
				<meta
					name='description'
					content=''
				/>
			</Head>

			<PageTransition />
			<main className='flex flex-col items-center text-dark w-full min-h-screen dark:text-light'>
				{/* <section className='w-4/5 h-screen items-center flex flex-row space-x-10'>
					<div className='w-1/2 md:w-full'></div>
					<div className='w-1/2 flex flex-col lg:w-full lg:text-center text-left space-y-6'>
						<AnimatedTextTypeWriter
							text={"Mission"}
							className='text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center'
						/>
						<AnimatedTextSpring
							text={`Hive Haven’s mission is to transform plastic packaging to a more environmentally friendly and biodegradable packaging alternative such as beeswax wrappers. In accordance with the objective of producing zero plastic waste, beeswax wrappers are an ideal substitute for packaging as it contains properties that make them durable, reusable, long-lasting, and environmentally friendlier than plastic wrappers. Hive Haven strives to offer a wide range of packaging for goods, from perishable to non-perishable, and offers both nearby and long-distance product delivery. We seek to bring about a positive change and improve the overall condition of the environment By advocating for a plastic-free environment and offering eco-friendly substitutes.`}
							className='text-left lg:text-center font-medium md:text-sm sm:text-xs'
						/>
					</div>
				</section> */}
				<section className='w-full h-full flex justify-center py-24'>
					<div className='w-4/5 flex flex-col items-center top-10 space-y-16'>
						<AnimatedTextTypeWriter
							text={`Meet the Team`}
							className={`${raleway.className} font-black italic text-5xl xl:text-5xl lg:text-6xl md:text-4xl sm:text-3xl text-center`}
						/>

						<div className='w-4/5 sm:w-11/12 grid grid-cols-2 gap-16 xl:grid-cols-1'>
							{teamArr.map((t, i) => (
								<div
									key={i}
									className='flex flex-col space-y-5'
								>
									<AnimatedTextTypeWriter
										text={t.name}
										className={`${raleway.className} font-black italic text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center`}
									/>
									<AnimatedTextTypeWriter
										text={t.role}
										className={`${raleway.className} text-primary dark:text-primary font-semibold italic text-3xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center`}
									/>
									<div className='flex flex-col space-y-8'>
										{t.paragraphArr.map((p, i) => (
											<p
												key={i}
												className='font-medium w-full md:text-sm text-left lg:text-center'
											>
												{p}
											</p>
										))}
									</div>
									{t.connectionsArr && (
										<div className='flex flex-col justify-start space-y-8'>
											<AnimatedTextTypeWriter
												text={"Staff"}
												className={`${raleway.className} mt-8 text-primary dark:text-primary font-semibold italic text-3xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center`}
											/>

											<AnimatedList liArr={t.connectionsArr} />
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
