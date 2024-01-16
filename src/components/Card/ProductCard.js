import React from "react";
import Image from "next/image";
import Link from "next/link";
import { raleway } from "@/styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ img, href, title }) {
	return (
		<div className='max-w-sm bg-light border border-gray-200 shadow dark:bg-dark dark:border-light'>
			<Link href={"/products/"}>
				<Image
					alt={title}
					src={img}
				/>
			</Link>
			<div className='p-5 flex flex-col space-y-1'>
				<p
					className={`${raleway.className} font-semibold italic text-left lg:text-center`}
				>
					{title}
				</p>
				<div className='flex flex-row space-x-1'>
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
				</div>
				<p className={`text-gray-400 text-left lg:text-center`}>₱300</p>
			</div>
		</div>
	);
}
