import Image from "next/image";
import React from "react";

const Power = () => {
  return (
    <section className="career-secA">
      <div className="container">
        <div className="heading">
          <h2>Join a team that's Powering the Future of Real Esate.</h2>
          <p>
            We are a team of innovators, problem-solvers, and passionate
            builders united by a single, ambitious mission. Here’s what it’s
            like to work at Courtyard Group.
          </p>
        </div>

        <div className="col">
          {data?.map(({ title, description, icon }, i) => {
            return (
              <div className="item" key={i}>
                <div className="ttl">
                  <h3>{title}</h3>
                  <Image src={icon} alt="icon" width={57} height={57} />
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Power;

const data = [
  {
    title: "Tackle Meaningful Challenges",
    description:
      "This isn’t just another job — it’s an opportunity to solve complex industry challenges and create solutions that drive real impact. If you’re passionate about innovation, problem solving, and building the future, you’ll thrive with us.",
    icon: "/assets/icon/mentorship 1.svg",
  },
  {
    title: "A Culture of Ownership & Growth",
    description: "We believe great ideas can come from anywhere. Our culture is built on trust, ownership, and continuous growth empowering you to take initiative, learn constantly, and create meaningful impact.",
    icon: "/assets/icon/success 1.svg",
  },
  {
    title: "Collaborate with Passion",
    description:
      "You’ll work alongside a passionate team of driven professionals in a collaborative environment built on trust, learning, and shared success — where every contribution helps shape a stronger future.",
    icon: "/assets/icon/deal 1.svg",
  },
  {
    title: "Innovate in a High Growth Environment",
    description:
      "The mining and energy sector is evolving rapidly  and so are we. Join a team driven by innovation, operational excellence, and sustainable growth, where bold ideas create lasting impact.",
    icon: "/assets/icon/team 1.svg",
  },
];
