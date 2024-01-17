import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Signin({ googleSignInStart }) {
	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Sign in to your account
						</h1>
						<form className='space-y-4 md:space-y-6'>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Your email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='name@company.com'
									required=''
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='••••••••'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required=''
								/>
							</div>
							<button
								className='w-full flex flex-row items-center justify-center whitespace-nowrap bg-blueGray-500 text-white font-bold text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 bg-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
hover:dark:bg-dark hover:dark:text-light hover:dark:border-light group gap-2 cursor-pointer'
							>
								<div>Sign in</div>
							</button>
							<div className='flex flex-row items-center space-x-2 justify-center'>
								<div className='w-full h-[1px] bg-gray-400' />
								<div>or</div>
								<div className='w-full h-[1px] bg-gray-400' />
							</div>
						</form>
						<button
							className='w-full flex flex-row items-center justify-center whitespace-nowrap bg-blueGray-500 text-white font-bold text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 bg-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
hover:dark:bg-dark hover:dark:text-light hover:dark:border-light group gap-2 cursor-pointer'
							onClick={googleSignInStart}
						>
							<FontAwesomeIcon
								className='w-[15px] h-[15px]'
								icon={faGoogle}
							/>
							<div> Sign in with Google</div>
						</button>
						<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
							Don’t have an account yet?{" "}
							<span className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
								Sign up
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
