import Image from "next/image";
import Link from "next/link";
// import "@/uploads/styles/header/header.css";
// import "@/app/(frontend)/globals.css";

const NotFound = () => {
    return (
        <html lang="en">
            <body className="antialiased">
                <section>
                    <div className="not-found-banner">
                        <div className="content text-center">
                            <div className="logo">
                                <div className="">
                                    <Image src="/assets/logo-q.svg" width={108} height={108} alt="ico"></Image>
                                </div>
                            </div>
                            <h1>PAGE NOT FOUND!</h1>
                            <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                            <Link href="/" className='btn primary-btn'>
                                <span>Back to Home</span>
                                <Image className='arrow-ico' src="/assets/icon/btn-arrow.svg" width={20} height={8} alt='right ico'></Image>
                            </Link>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    );
};

export default NotFound;