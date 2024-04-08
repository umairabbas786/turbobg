import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons, workImage, work2Image }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<h2>Expert High School AP® Computer Science Tutoring</h2>
						<p className='fw-bold'>Let me show you what you can achieve in High School AP® Computer Science! </p>
						<p>Specializing in programming fundamentals, algorithm development, and the comprehensive CSA lab assignments, I am here to guide you through each step. By prioritizing clean code and efficient solutions, I will teach you the most optimal way to enhance your coding skills. With a focus on the highest quality and value, I'm dedicated to helping you achieve maximum problem-solving results in your AP® Computer Science journey.</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3 d-none">{value.title}sad</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center d-flex">
						<img
							className="img-fluid my-5 my-md-3 card-image" width="350"
							height="350" src={image}
							alt="profile of hashirshoaeb"
						/>
						<div className='d-xl-flex flex-column ms-0 ms-md-5 d-none'>
							<img
								className="img-fluid my-0 my-md-3 card-image" width="120"
								height="320" src={workImage}
								alt="profile of hashirshoaeb"
							/>
							<img
								className="img-fluid my-0 my-md-3 card-image" width="120"
								height="320" src={work2Image}
								alt="profile of hashirshoaeb"
							/>
						</div>
					</div>
					<div className='col-12 d-flex d-xl-none justify-content-start'>
						<img
							className="img-fluid my-0 my-md-3 card-image" width="45%"
							height="100" src={workImage}
							alt="profile of hashirshoaeb"
						/>
						<img
							className="img-fluid my-0 my-md-3 card-image align-self-center ms-auto" width="45%"
							height="320" src={work2Image}
							alt="profile of hashirshoaeb"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold ">{title}</h1>
				<div className="px-sm-5 lh-base">
					<p>As a proud Ann Arbor native and Skyline High School graduate, my own computer science journey began in these very halls, sparking a passion that led me to Wayne State University. It was during my high school years that I discovered my knack for coding, a revelation that has shaped my career and now drives me to inspire students like you. Let's unlock your potential and embark on this exciting adventure together!
						<br></br><br></br>
						I have great interest in helping high school students discover and deepen their understanding of the power of computing.  In today’s constantly and rapidly changing technological environment, having a solid background in computer science in high school is opening more and more doors in an increasing number of careers.  My experience in multiple languages and platforms gives me an edge as an instructor that you won’t find anywhere else.  From data science to data structures, I’ve got you covered!
					</p>
				</div>
			</div>
		</div>
	);
}