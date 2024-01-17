import React from "react";
import Image from "next/image";
import Link from "next/link";
import { raleway } from "@/styles/fonts";

export default function ProductCard({ img, href, title, price }) {
	return (
		<div className='max-w-sm bg-white border rounded-lg border-gray-200 shadow-lg dark:bg-black dark:border-light'>
			<Link href={href}>
				<Image
					className='w-full max-h-[325px] rounded-lg object-cover'
					alt={title}
					src={img}
				/>
			</Link>
			<Link
				href={href}
				className='p-5 flex flex-col space-y-1'
			>
				<p
					className={`${raleway.className} font-semibold italic text-left lg:text-center`}
				>
					{title}
				</p>
				<p className={`text-gray-400 text-left lg:text-center`}>{price}</p>
			</Link>
		</div>
	);
}
