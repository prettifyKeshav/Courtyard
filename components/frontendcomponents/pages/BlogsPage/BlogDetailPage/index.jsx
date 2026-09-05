import Hero from "../../../molecules/Hero";
import React from 'react'
import Image from "next/image";
import "../../../../../uploads/styles/blog/blog.css"
import FaqSec from "./FaqSec";
import MoreBlogs from "./MoreBlogs";

const BlogDetailPage = () => {
    return (
        <>
            <Hero
                bgType="image"
                imgSrc="/assets/images/Others/blogs/blog-detail-banner.jpg"
                poster="/assets/images/Others/blogs/blog-detail-banner.jpg"
                imgHeight="626"
                imgWidth="1028"
                bannerClassName="blog-detail-banner"
                subHeading="30 Mar 2026"
                heading="Why Data-Driven Investing Is No Longer Optional"
                
                isPlayIconVisible
                playVideoSrc="https://www.youtube.com/embed/dmOyoLXcUZA?si=LHs-CL0k8V-JLkcR"
            />

            <div className="blog-details-secA">
                <div className="container">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur. Maecenas vel fringilla felis faucibus arcu in ultrices quam aliquam. Sed faucibus libero at tincidunt amet sed rhoncus. Pulvinar vitae viverra interdum orci mauris facilisis libero aenean amet. Viverra eu feugiat eu placerat dui auctor. Est gravida sit euismod aenean. At sit risus auctor nisi. Mi ornare faucibus at enim sed egestas. Mauris pretium enim proin nam fames. Est risus ut amet a tincidunt tincidunt ut ultricies. Velit arcu at at nullam leo sodales egestas aenean sed. Placerat sit elit aliquam lectus quis odio mattis enim. Laoreet habitant felis praesent in augue sagittis. Non in ut at elementum viverra quam duis non metus.Et egestas facilisis libero orci sed mauris massa erat. Egestas fusce bibendum dolor condimentum neque. Feugiat commodo ut erat ipsum faucibus lacus libero. Ullamcorper a odio mi volutpat id ut urna. Nulla facilisi tristique lorem tellus lectus a. Condimentum tempus leo eu at vitae purus est cras eget. Vel varius orci tempus aliquam.</p>
                        <p>Mollis nulla cursus amet aliquet. Vitae etiam amet lacus pulvinar imperdiet turpis turpis maecenas quisque. Quis sagittis quis ut cursus suspendisse. Mi ut in elementum ipsum pellentesque tincidunt auctor. In dolor non nibh sit ac. Ac morbi cras aliquam tellus libero enim turpis nulla vel. Dui scelerisque pellentesque sit fermentum. Vestibulum urna in neque hac eget nisl nisl sed pretium. Suspendisse cursus ac vel id porttitor quam. Tristique enim vivamus commodo scelerisque sit amet purus. At suspendisse euismod lectus hac justo tortor eget purus semper. Mauris id scelerisque sollicitudin interdum. Elit id pharetra malesuada cursus varius etiam diam. Turpis urna leo lacinia risus amet sit adipiscing sollicitudin.</p>
                        <figure>
                            <Image src="/assets/images/Others/blogs/blog-img.jpg" width={810} height={449} alt="ico" ></Image>
                        </figure>
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>A auctor malesuada sed sit justo at. Faucibus enim et blandit adipiscing dolor eu porttitor at. Tempor scelerisque laoreet tristique massa. Arcu varius scelerisque mattis sagittis arcu nisl est felis aliquam. Egestas neque orci at amet augue sed faucibus. Dui urna dui platea laoreet metus id viverra. Nibh imperdiet diam nisl laoreet et in non. Tincidunt consectetur libero ultricies aliquam. Sed ornare viverra id laoreet purus viverra facilisis tortor. Nunc cras dictumst blandit porta id elementum mauris eu. In id enim consequat volutpat bibendum cras adipiscing. Leo placerat mattis quam sodales.</p>
                        <p>Morbi cras ultrices cras odio. Sit aliquet adipiscing duis sit nec. Urna imperdiet urna at volutpat sit. Ut est purus vitae venenatis. Purus fringilla commodo proin rhoncus tempus curabitur mauris diam. Sed sit egestas faucibus enim facilisis urna at ullamcorper. In accumsan in nulla a turpis amet risus nisl egestas. Leo facilisis varius non egestas enim malesuada sed nulla. Luctus elit velit cursus tincidunt.</p>
                    </div>
                </div>
            </div>

            <FaqSec />
            <MoreBlogs />
        </>
    )
}

export default BlogDetailPage