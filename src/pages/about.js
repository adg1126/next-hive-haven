import React from "react";
import Head from "next/head";
import PageTransition from "@/components/PageTransition";

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
		</>
	);
}
