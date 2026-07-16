import Image from "next/image";
import Link from "next/link";
import Motion from "../../molecules/Animate";

const Connect = () => {
    return (
        <section className="contact-secA">
            <div className="container">
                <Motion variant="fadeUp">
                    <div className="grid-box">
                        {data?.map(({ title, icon, description, social, link }, i) => {
                            return (
                                <div key={i} className="grid-box-item">
                                    <div className="flex">
                                        <figure>
                                            <Image src={icon} alt="icon" width={44} height={44} />
                                        </figure>
                                        <h4>{title}</h4>
                                        <Link className="desc" href={i === 1 ? "mailto:info@courtyardgroup.in" : i === 2 ? "tel:+919104051518" : "#"}>
                                            {description}
                                        </Link>
                                        {link && (
                                            <Link className="redirect" href={link?.href || "#"}>
                                                {link?.text}
                                                <Image
                                                    src="/assets/icon/move-right.svg"
                                                    alt="icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            </Link>
                                        )}
                                        {social && (
                                            <ul className="social">
                                                {social?.map(({ icon, href }, j) => {
                                                    return (
                                                        <li key={j}>
                                                            <Link href={href} target="_blank">
                                                                <Image
                                                                    src={icon}
                                                                    alt="icon"
                                                                    width={20}
                                                                    height={20}
                                                                />
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Motion>
            </div>
        </section>
    );
};

export default Connect;

const data = [
    {
        title: "Address",
        icon: "/assets/icon/locate.svg",
        description: "B/h. Alang House, Gotri-Sevasi Road, Gotri, Vadodara.",
        link: {
            text: "Get Direction",
            href: "https://maps.app.goo.gl/uiwWKVJaCAzaK4He9",
        },
    },
    {
        title: "Email us",
        icon: "/assets/icon/email.svg",
        description: "info@courtyardgroup.in",
        social: [
            {
                icon: "/assets/icon/social/facebook.svg",
                href: "https://www.facebook.com/courtyardgroupbaroda/",
            },
            {
                icon: "/assets/icon/social/instagram.svg",
                href: "https://www.instagram.com/courtyardgroupbaroda/",
            },
            {
                icon: "/assets/icon/social/linkedin.svg",
                href: "https://www.linkedin.com/company/courtyard-group-vadodara/",
            },
        ],
    },
    {
        title: "Phone",
        icon: "/assets/icon/phone.svg",
        description: "+91 91040 51518",
        link: {
            text: "Whatsapp",
            href: "https://wa.link/ti0h9t",
        },
    },
];
