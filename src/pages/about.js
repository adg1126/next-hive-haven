import React from "react";
import Head from "next/head";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import {
	AnimatedTextSpring,
	AnimatedTextTypeWriter,
} from "@/components/AnimatedText";
import AnimatedList from "@/components/List/AnimatedList";

import productPic3 from "../../public/images/product-pic-3.jpg";
import productPic2 from "../../public/images/product-pic-2.jpg";
import buildingPic from "../../public/images/building.png";
import mapPic from "../../public/images/map.png";
import { objectivesArr } from "@/content/content";

export default function about() {
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
			<main className='flex flex-col lg:space-y-20 items-center text-dark w-full min-h-screen dark:text-light'>
				{/* Section 1 */}
				<section className='w-4/5 h-screen lg:flex-col lg:h-full items-center flex flex-row space-x-10'>
					<div className='w-1/2 md:w-full lg:w-full'>
						<Image
							src={productPic3}
							alt='productPic3'
							className='w-full h-[90vh] lg:h-[50vh] object-cover border rounded-lg shadow-2xl lg:w-full md:inline-block md:w-full'
							priority
							sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw'
						/>
					</div>
					<div className='w-1/2 lg:mt-8 flex flex-col lg:w-full lg:text-center text-left space-y-6'>
						<AnimatedTextTypeWriter
							text={"Mission"}
							className='text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center'
						/>
						<AnimatedTextSpring
							text={`Hive Haven’s mission is to transform plastic packaging to a more environmentally friendly and biodegradable packaging alternative such as beeswax wrappers. In accordance with the objective of producing zero plastic waste, beeswax wrappers are an ideal substitute for packaging as it contains properties that make them durable, reusable, long-lasting, and environmentally friendlier than plastic wrappers. Hive Haven strives to offer a wide range of packaging for goods, from perishable to non-perishable, and offers both nearby and long-distance product delivery. We seek to bring about a positive change and improve the overall condition of the environment By advocating for a plastic-free environment and offering eco-friendly substitutes.`}
							className='text-left lg:text-center font-medium md:text-sm sm:text-xs'
						/>
					</div>
				</section>

				{/* Section 2 */}
				<section className='w-4/5 h-screen lg:flex-col-reverse lg:space-y-20 lg:h-full items-center flex flex-row space-x-10'>
					<div className='w-1/2 lg:mt-8 flex flex-col lg:w-full lg:text-center text-left space-y-6'>
						<AnimatedTextTypeWriter
							text={"Vission"}
							className='text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center'
						/>
						<AnimatedTextSpring
							text={`The Vision of Hive Haven is to be a top local business committed to utilizing beeswax's extraordinary potential and developing it into a flexible and sustainable resource for the betterment of people and the environment. The measure of our company's success will encompass not just our monetary achievements but also our constructive impact on the natural world and the communities we serve. Our company is committed to raising the quality standard for future generations in the beeswax business by serving as a beacon of long-term viability, inventiveness, and moral stewardship.`}
							className='text-left lg:text-center font-medium md:text-sm sm:text-xs'
						/>
					</div>
					<div className='w-1/2 md:w-full lg:w-full'>
						<Image
							src={productPic2}
							alt='productPic1'
							className='w-full h-[90vh] lg:h-[50vh] object-cover border rounded-lg shadow-2xl lg:w-full md:inline-block md:w-full'
							priority
							sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw'
						/>
					</div>
				</section>

				{/* Section 3 */}
				<section className='w-4/5 h-full items-center flex flex-row space-x-10'>
					<div className='flex flex-col mb-16 w-full text-center space-y-8'>
						<AnimatedTextTypeWriter
							text={`Objectives`}
							className='text-center text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl'
						/>
						<AnimatedTextSpring
							text={`With the goal to establish Hive Havens as a leading sustainable alternative in the food packaging industry by positioning our beeswax wrappers as a go-to choice for eco-conscious consumers, emphasizing both product functionality and environmental responsibility, Hive Haven aims achieve the following objectives, both finance and non-finance related within the next three (3) years:`}
							className='text-center my-4 text-ba font-medium md:text-sm sm:text-xs'
						/>

						<div className='text-left'>
							<AnimatedList liArr={objectivesArr} />
						</div>
					</div>
				</section>

				{/* Section 4 */}
				<section className='w-4/5 h-full items-center flex flex-row space-x-10'>
					<div className='w-1/2 md:w-full'>
						<Image
							src={buildingPic}
							alt='building pic'
							className='w-full border rounded-lg shadow-2xl lg:w-full md:inline-block md:w-full'
							priority
							sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw'
						/>
					</div>
					<div className='w-1/2 flex flex-col lg:w-full lg:text-center text-left space-y-6'>
						<AnimatedTextTypeWriter
							text={"Location"}
							className='text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl text-left lg:text-center'
						/>
						<AnimatedTextSpring
							text={`"Hive Haven" is located on the 2nd floor of Tom's Place Bldg., 21 Diego Silang St., Brgy. 6, Batangas City, 4200 Batangas, Philippines. `}
							className='text-left lg:text-center font-medium md:text-sm sm:text-xs'
						/>
						<Image
							src={mapPic}
							alt='map pic'
							className='w-full border rounded-lg shadow-2xl lg:w-full md:inline-block md:w-full'
							priority
							sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw'
						/>
					</div>
				</section>
			</main>
		</>
	);
}
