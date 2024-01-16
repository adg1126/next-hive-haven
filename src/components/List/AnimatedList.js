import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon.js";

const ListItem = (list) => {
	const liRef = useRef(null);

	return (
		<li
			liRef={liRef}
			className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'
		>
			<ListIcon ref={liRef} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className='capitalize font-bold text-2xl text-primary'>
					{list?.title}
				</h3>
				<span className='capitalize font-medium text-dark/75'></span>
				{list?.paragraphArr.map((p, i) => (
					<p
						key={i}
						className='font-medium w-full'
					>
						{p}
					</p>
				))}
			</motion.div>
		</li>
	);
};

export default function AnimatedList({ liArr }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div
			ref={ref}
			className='w-[75%] mx-auto relative'
		>
			<motion.div
				style={{ scaleY: scrollYProgress }}
				className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
			/>
			<ul className='w-full flex flex-col items-start justify-between ml-4'>
				{liArr?.map((e, i) => (
					<ListItem
						key={i}
						{...e}
					/>
				))}
			</ul>
		</div>
	);
}
