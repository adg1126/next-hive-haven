import React from "react";
import Head from "next/head";
import PageTransition from "@/components/PageTransition";
import SigninContainer from "@/containers/SigninContainer";

export default function signin() {
	return (
		<>
			<Head>
				<title>Signin | Hive Haven</title>
				<meta
					name='description'
					content=''
				/>
			</Head>

			<PageTransition />
			<main className='flex flex-col items-center text-dark w-full min-h-screen dark:text-light'>
				<section className='relative w-full h-screen flex justify-center items-center'>
					<SigninContainer />
				</section>
			</main>
		</>
	);
}
