import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const blogPosts = [
  {
    id: 1,
    date: 'July 05 2024',
    readTime: 'Lonavala, a picturesque hill station near Pune and Mumbai, is famous for its lush green valleys, misty hills, and stunning waterfalls. Known for attractions like Tiger’s Leap, Bhushi Dam, and Karla Caves, it’s a perfect getaway for nature lovers and adventure seekers. Do not forget to try the famous Lonavala chikki while enjoying the scenic beauty! 🌿⛰️',
    title: 'Mumbai to Lonavala Cab ',
    image: '/images/keyword/23.jpg',
    link: '/Mumbai-to-Lonavala-Cab',
  },
  {
    id: 2,
    date: 'July 06 2024',
    readTime: 'Konkan, a breathtaking coastal region in Maharashtra, is known for its pristine beaches, lush greenery, and rich cultural heritage. From the serene shores of Ganpatipule and Tarkarli to the historical forts of Sindhudurg, it offers a perfect blend of nature, adventure, and history. The region is also famous for its delicious seafood and authentic Konkani cuisine. 🌊🌴',
    title: 'Mumbai to Konkan Cab ',
    image: '/images/keyword/52.jpg',
    link: '/Mumbai-to-Konkan-Cab',
  },
  {
    id: 3,
    date: 'July 09 2024',
    readTime: 'Ganpatipule, a serene coastal town in Maharashtra, is famous for its pristine beaches and the revered Ganpatipule Temple dedicated to Lord Ganesha. The turquoise waters, golden sands, and lush hills make it a perfect spiritual and leisure destination. Visitors can also explore nearby attractions like Aare-Ware Beach and Jaigad Fort for a scenic and cultural experience. 🌊🙏',
    title: 'Mumbai to Ganpatipule Cab ',
    image: '/images/keyword/47.jpg',
    link: '/Mumbai-to-Ganpatipule-Cab',
  },
  {
    id: 4,
    date: 'July 10 2024',
    readTime: 'Escape the city with a relaxing cab ride from Mumbai to Matheran — a peaceful hill station known for its scenic views, cool climate, and vehicle-free charm. Perfect for a weekend getaway, Matheran offers fresh air, nature trails, horse rides, and stunning viewpoints just a few hours from Mumbai. With no cars allowed inside, you can truly unwind in its serene, old-world atmosphere.',
    title: 'Mumbai to Matheran Cab ',
    image: '/images/keyword/26.jpg',
    link: '/Mumbai-to-Matheran-Cab',
  },
];


const BlogSection = () => {
  return (
    <section className="bg-smoke overflow-hidden py-4" id="blog-sec">
      <div className="container">
        <div className="mb-30 text-center text-md-start">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="title-area mb-md-0">
                <span className="sub-title">Our Latest Tours</span>
                {/* <h2 className="sec-title">News & Articles From Tourm</h2> */}
              </div>
            </div>
            {/* <div className="col-md-auto">
              <a href="/services" className="th-btn style4 th-icon">See More Articles</a>
            </div> */}
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="th-slider has-shadow"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-box_content colorr ">
                    <h3 className="box-title ">
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <p className=''>{post.readTime}</p>
                    {/* <a href={post.link} className="th-btn style4 th-icon">Read More</a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
