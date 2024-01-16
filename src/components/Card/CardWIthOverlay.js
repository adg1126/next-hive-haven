import React from "react";
import Image from "next/image";

export default function CardWIthOverlay({ img, title, paragraph }) {
	return (
		<div className='min-w-[350px] min-h-[250px] relative isolate flex flex-col justify-end overflow-hidden rounded-lg p-6'>
			<Image
				src={img}
				alt='University of Southern California'
				objectFit='cover'
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
			<h3 className='z-10 mt-3 text-3xl font-bold text-white'>{title}</h3>
			<div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
				{paragraph}
			</div>
		</div>
	);
}
