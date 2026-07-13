const Intro = () => {
  return (
    <section className="about-secA">
      <div className="container">
        <div className="flex-box">
          <div className="col">
            <h2>The Best Construction with Design Consistency</h2>
            <p>
              Courtyard Group founded by <b>Mr. Viral Sheth</b> has been at the
              forefront of developing residential and commercial spaces in
              Vadodara. With over a decade of experience in real estate
              development, we've perfected the art of delivering value to our
              customers. Our properties stand the test of time and are
              constructed using quality materials.
            </p>
            <p>
              With contemporary architectural designs and well thought out
              amenities. We're confident of satisfying the needs of the new-age
              buyer.
            </p>
          </div>
          <div className="col">
            <figure >
              <video
                src="/assets/video/about/engineers.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
