import Image from "next/image";

const Form = () => {
  return (
    <section className="contact-secB">
      <div className="box">
        <div className="heading">
          <Image
            className="icon"
            alt="cg"
            src="/assets/icon/cg.svg"
            width={86}
            height={64}
          />
          <h2>We're Here to Help You Find the Right Property</h2>
        </div>
        <form action="">
          <div className="form form-grid">
            <div className="form-group">
              <input type="text" />
              <label htmlFor="">Full Name*</label>
            </div>

            <div className="form-group">
              <input type="text" />
              <label htmlFor="">Last Name*</label>
            </div>
            <div className="form-group">
              <input type="text" />
              <label htmlFor="">Email*</label>
            </div>
            <div className="form-group">
              <input type="text" />
              <label htmlFor="">Phone*</label>
            </div>
            <div className="form-group full">
              <textarea name="" id=""></textarea>
              <label htmlFor="">Message</label>
            </div>
            <div className="bottom-btn full">
              <button className="btn primary-btn">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
