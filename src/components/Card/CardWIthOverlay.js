import React from "react";
import Image from "next/image";

export default function CardWIthOverlay({ img, title, paragraph }) {
	return (
		<div className='shadow-lg min-w-[300px] min-h-[250px] relative isolate flex flex-col justify-end overflow-hidden rounded-lg p-6 font-black dark:font-light'>
			<Image
				src={img}
				alt='University of Southern California'
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div className='absolute inset-0 bg-light dark:bg-dark opacity-75'></div>
			<h3 className='z-10 mt-3 text-3xl font-bold'>{title}</h3>
			<div className='z-10 mt-3 font-medium w-full md:text-sm text-left lg:text-center'>
				{paragraph}
			</div>
		</div>
	);
}
