import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Skills = ({ title, cards }) => {
  return (
    <div id="skills" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              link={value.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold mb-5">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {/* {cards.map((value, index) => (
						<TestimonialCard
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))} */}
          <div class="testimonial_sec">
            <div class="testimonial_inner d-flex flex-row flex-wrap justify-content-center">
              <div class="card w-25">
                <div class="card-body">
                  <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                  <h5 class="card-title">Computer Science Teacher - Pioneer High School</h5>
									<br/>
                  <p class="card-text">
                    Several of my students have worked with Birol. In each case,
                    I&apos;ve seen monumental improvement in their understanding and
                    test scores. I&apos;m certain these students have appreciated
                    getting past the blockages that were holding them back;
                    things we just can&apos;t spend deeper time on in class.” Each
                    student is different and Birol understands that!
                  </p>
                  <strong>Ted Emch</strong> <br />
                </div>
              </div>

              <div class="card w-25">
                <div class="card-body">
                  <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                  <h5 class="card-title">Aenean Sagittis Enim Quis</h5>
									<br/>
                  <p class="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi veniam cumque maxime doloribus doloremque
                    recusandae dolorem consequuntur modi, sit blanditiis!
                  </p>
                  <strong>Jone Doe</strong> <br />
                  <span>Manager</span>
                </div>
              </div>

              <div class="card w-25">
                <div class="card-body">
                  <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                  <h5 class="card-title">Aenean Sagittis Enim Quis</h5>
									<br/>
                  <p class="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi veniam cumque maxime doloribus doloremque
                    recusandae dolorem consequuntur modi, sit blanditiis!
                  </p>
                  <strong>Jone Doe</strong> <br />
                  <span>Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card = ({ title, description, link, icons }) => {
  return (
    <div
      className="card  mx-sm-4 my-4 card-work"
      style={{
        width: "20rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: "#ffffff",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#365B6D ",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <h4 className="text-white m-3">{title}</h4>
      </div>
      <p className="text-dark m-3">{description}</p>
      <div className="text-end">
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="icon-style mx-1"
                  icon={value.icon}
                  size="lg"
                />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};
export const TestimonialCard = ({
  title,
  description,
  link,
  icons,
  imageUrl,
  rating,
}) => {
  // Simple function to render stars based on the rating
  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = "";
    for (let i = 1; i <= totalStars; i++) {
      stars += "★";
    }
    return stars;
  };

  return (
    <div
      className="card mx-sm-4 my-4 card-work"
      style={{
        width: "20rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: "#ffffff",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Image placeholder at the top */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#365B6D",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          textAlign: "center",
        }}
      >
        <img
          src="./profile.png"
          alt="testimonial"
          style={{
            marginTop: "-30px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "3px solid white",
          }}
        />
        <h4 className="text-white m-3">{title}</h4>
      </div>
      <p className="text-dark m-3">{description}</p>
      <div className="text-end m-3">
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="icon-style mx-1"
                  icon={value.icon}
                  size="lg"
                />
              </a>
            </Link>
          ))}
      </div>
      {/* Star rating at the bottom */}
      <div
        className="text-center"
        style={{ fontSize: "20px", color: "#FFD700" }}
      >
        {renderStars(rating)}
      </div>
    </div>
  );
};
