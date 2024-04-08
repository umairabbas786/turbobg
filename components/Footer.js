import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5 lh-lg">
					<p>Ready to elevate your computer science skills and unlock your potential?<br></br>
						Starting rates as low as $55.00 per 1-hour session<br></br>
						Feel free to reach out directly by email at birolguldal@gmail.com or call/text at (734)-972-2928.

					</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
						
					</div>
					<img
							className="img-fluid my-0 my-md-3 logos"
							height="100" src='/logos.png'
							alt="profile of hashirshoaeb"
						/>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			{/* <div className="container text-muted">
				<small>&copy; 2021 {" "}
					<Link href="">
						<a></a>
					</Link>
					. Open sourced with love under {" "}
					<Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">
						<a>MIT</a>
					</Link>
					{" "} License
				</small>
			</div> */}
		</footer>
	);
}