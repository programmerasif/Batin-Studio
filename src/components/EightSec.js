import React from 'react';
import '../style/homeEightSec.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/homeEightSec.css'

const EightSec = () => {
	
	return (
		<>
			<div className="lg:mt-[150px] lg:py-[90px] ">

				<div className='block lg:hidden w-11/12 mx-auto'>

						<div className=' text-center '>
							<h2 className="mt-[36px] text-[50px] lg:text-[70px] leading-[70px] font-[400]">
								We believe in improving life's
							</h2>

							<p className="mt-10 font-sans text-lg leading-8 ">
								We are committed to giving back to the <br /> community and donate
								5% of our revenue to <br />
								charities that make a difference in the lives of <br />
								others.
							</p>
						</div>
						
						<div className="mx-auto">
						<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
								delay: 2500,
								disableOnInteraction: false,
								}}
								pagination={{
								clickable: true,
								}}
								// navigation={true}
								modules={[Autoplay, Pagination, Navigation]}
								className="mySwiper"
							>
								<SwiperSlide><img className='w-full' src="images/cards/chuttersnap.png" alt="Image description" /></SwiperSlide>
								<SwiperSlide><img className='w-full' src="images/cards/american-unsplash.png" alt="Image description" /></SwiperSlide>
								<SwiperSlide><img className='w-full' src="images/cards/noah-unsplash.png" alt="Image description" /></SwiperSlide>
								<SwiperSlide><img className='w-full' src="images/cards/larm-unsplash.png" alt="Image description" /></SwiperSlide>
						</Swiper>
						</div>
						
				</div>
				
				<div className="lg:w-[85%] wemakeWrap mx-auto flex justify-between ">					

					<ul id="cards">

						<li className="card" id="card_1">
							<div className="card__content ">

								<div>
									<h2 className="mt-[36px] text-[70px] leading-[70px] font-[400]">
										We believe in improving life's
									</h2>

									<p className="mt-10 font-sans text-xl leading-8 ">
										We are committed to giving back to the <br /> community and donate
										5% of our revenue to <br />
										charities that make a difference in the lives of <br />
										others.
									</p>
								</div>
								
								<figure>
									<img src="images/cards/chuttersnap.png" alt="Image description" />
								</figure>
							</div>
						</li>

						<li className="card " id="card_2">
							<div className="card__content">
								<figure>
									<img src="images/cards/american-unsplash.png" alt="Image description" />
								</figure>
							</div>
						</li>

						<li className="card" id="card_3">
							<div className="card__content">
								<figure>
									<img src="images/cards/noah-unsplash.png" alt="Image description" />
								</figure>
							</div>
						</li>

						<li className="card" id="card_4">
							<div className="card__content">
								<figure>
									<img src="images/cards/larm-unsplash.png" alt="Image description" />
								</figure>
							</div>
						</li>
						
					</ul>
				</div>

				<hr className="py-[20px] mt-[100px] invisible" />
			</div>
		</>
	);
};

export default EightSec;












// import React from 'react';
// import '../style/homeEightSec.css';

// const EightSec = () => {
// 	return (
// 		<>
// 			<div className="mt-[150px] wmw pt-[90px] md:py-[90px] bg-green-500 ">
// 				<div className="w-[85%] wemakeWrap mx-auto flex justify-between gap-1">
// 					<ul id="cards">

// 						<li className="card" id="card_1">
// 							<div className="card__content">

// 								<div>
// 									<h2 className="mt-[36px] text-[70px] leading-[70px] font-[400]">
// 										We believe in improving life's
// 									</h2>

// 									<p className="mt-10 font-sans text-xl leading-8 ">
// 										We are committed to giving back to the <br /> community and donate
// 										5% of our revenue to <br />
// 										charities that make a difference in the lives of <br />
// 										others.
// 									</p>
// 								</div>
								
// 								<figure>
// 									<img src="images/cards/chuttersnap.png" alt="Image description" />
// 								</figure>
// 							</div>
// 						</li>

// 						<li className="card" id="card_2">
// 							<div className="card__content">
// 								<figure>
// 									<img src="images/cards/american-unsplash.png" alt="Image description" />
// 								</figure>
// 							</div>
// 						</li>
// 						<li className="card" id="card_3">
// 							<div className="card__content">
// 								<figure>
// 									<img src="images/cards/noah-unsplash.png" alt="Image description" />
// 								</figure>
// 							</div>
// 						</li>
// 						<li className="card" id="card_4">
// 							<div className="card__content">
// 								<figure>
// 									<img src="images/cards/larm-unsplash.png" alt="Image description" />
// 								</figure>
// 							</div>
// 						</li>
						
// 					</ul>
// 				</div>

// 				<hr className="py-[20px] mt-[100px] invisible" />
// 			</div>
// 		</>
// 	);
// };

// export default EightSec;
