import React from "react";
import Image from "next/image";
import Link from "next/link";
import { raleway } from "@/styles/fonts";

export default function ProductCard({ img, href, title, price }) {
	return (
		<div className='max-w-sm bg-white border rounded-lg border-gray-200 shadow-lg dark:bg-black dark:border-light'>
			<Link href={"/products/"}>
				<Image
					className='rounded-lg'
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
				<p className={`text-gray-400 text-left lg:text-center`}>{price}</p>
			</div>
		</div>
	);
}
