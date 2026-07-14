import Image from "next/image";
import Link from "next/link";

const Connect = () => {
  return (
    <section className="contact-secA">
      <div className="container">
        <div className="grid-box">
          {data?.map(({ title, icon, description, social, link }, i) => {
            return (
              <div key={i} className="grid-box-item">
                <div className="flex">
                  <figure>
                    <Image src={icon} alt="icon" width={44} height={44} />
                  </figure>
                  <h4>{title}</h4>
                  <Link className="desc" href={i === 1 ? "mailto:" : i === 2 ? "tel:" : "#"}>
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
                            <Link href={href}>
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
      href: "#",
    },
  },
  {
    title: "Email us",
    icon: "/assets/icon/email.svg",
    description: "info@courtyardgroup.in",
    social: [
      {
        icon: "/assets/icon/social/twitter.svg",
        href: "#",
      },
      {
        icon: "/assets/icon/social/facebook.svg",
        href: "#",
      },
      {
        icon: "/assets/icon/social/instagram.svg",
        href: "#",
      },
      {
        icon: "/assets/icon/social/linkedin.svg",
        href: "#",
      },
    ],
  },
  {
    title: "Phone",
    icon: "/assets/icon/phone.svg",
    description: "+91 91040 51518",
    link: {
      text: "Whatsapp",
      href: "#",
    },
  },
];
