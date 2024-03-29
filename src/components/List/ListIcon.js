import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ListIcon({ liRef }) {
	const { scrollYProgress } = useScroll({
		target: liRef,
		offset: ["center end", "center center"],
	});

	return (
		<figure className='absolute left-0 stroke-dark dark:stroke-light'>
			<svg
				className='-rotate-90'
				width='75'
				height='75'
				viewBox='0 0 100 100'
			>
				<circle
					className='stroke-primary stroke-1 fill-none dark:stroke-primaryDark'
					cx='75'
					cy='50'
					r='20'
				/>
				<motion.circle
					className='stroke-[5px] fill-light dark:fill-dark'
					style={{ pathLength: scrollYProgress }}
					cx='75'
					cy='50'
					r='20'
				/>
				<circle
					className='stroke-1 fill-primary animate-pulse dark:fill-primaryDark'
					cx='75'
					cy='50'
					r='10'
				/>
			</svg>
		</figure>
	);
}
