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
				<title>Team | Hive Haven</title>
				<meta
					name='description'
					content=''
				/>
			</Head>

			<PageTransition />
			<main className='flex flex-col items-center text-dark w-full min-h-screen dark:text-light'>
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
									{t.img ? (
										<Image
											class='w-[150px] h-[150px] rounded-full'
											src={t.img}
											alt='Rounded avatar'
										/>
									) : (
										<div className='relative w-[150px] h-[150px] overflow-hidden bg-white rounded-full dark:bg-gray-600'>
											<svg
												className='absolute w-[150px] h-[150px] text-gray-400'
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fill-rule='evenodd'
													d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
													clip-rule='evenodd'
												></path>
											</svg>
										</div>
									)}
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
