import Image from "next/image";
import Link from "next/link";
import Motion from "../../molecules/Animate";

const Founder = () => {
    return (
        <section className="about-secD">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Motion variant="fadeUp">
                            <h2>CMD Corner</h2>
                            <Image
                                className="quote"
                                src="/assets/icon/quote-primary.svg"
                                alt="quote"
                                width={74}
                                height={54}
                            />
                            <p>
                                A business achieves true success when its growth creates
                                meaningful impact in the lives of its people, partners, and
                                communities.
                            </p>
                            <div className="info">
                                <figcaption>
                                    <h4>Mr. Viral Sheth</h4>
                                    <p>Chairman & Managing Director</p>
                                </figcaption>
                                <Link href="https://www.linkedin.com/company/courtyard-group-vadodara" >
                                    <figure>
                                        <Image src="/assets/icon/linkedin-fill.svg" alt="linkedin" width={41} height={41} />
                                    </figure>
                                </Link>
                            </div>
                        </Motion>
                    </div>
                    <div className="col">
                        <Motion variant="fadeUp">
                            <figure>
                                <Image
                                    src="/assets/images/about/viral-sheth.png"
                                    alt="viral sheth"
                                    width={556}
                                    height={554}
                                />
                            </figure>
                        </Motion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
