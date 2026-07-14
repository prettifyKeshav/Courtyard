import Image from "next/image";

const Openings = () => {
  return (
    <section className="career-secC">
      <div className="container">
        <div className="heading">
          <h6>Open positions(16)</h6>
          <h2>Find a Position That Suits You</h2>
        </div>
        <div className="grid-box">
          {data?.map(({ position, location }, i) => {
            return (
              <div key={i} className="open-item">
                <h6>{position}</h6>
                <p>{location}</p>
                <figure className="icon">
                  <Image
                    src="assets/icon/external.svg"
                    alt="external"
                    width={12}
                    height={12}
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Openings;

const data = [
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  },
  {
    position: "Digital Designer",
    location: "Gurgaon",
  }
];
