import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/images/namamigange1.jpg";
import img2 from "../assets/images/namamigange2.jpg";
import img3 from "../assets/images/namamigange4.jpg";
import img4 from "../assets/images/namamigange5.jpg";

const CarouselItem = ({ imgURI }) => {
	return (
		<div>
			<img src={imgURI} className='w-full h-[50vh] object-cover' />
		</div>
	);
};

const CarouselComp = () => {
	return (
		<Carousel width={'100%'} infiniteLoop dynamicHeight={false} autoPlay showThumbs={false} showStatus={false}>
			
			<CarouselItem imgURI={img1} />
			<CarouselItem imgURI={img2} />
			<CarouselItem imgURI={img3} />
			<CarouselItem imgURI={img4} />
		</Carousel>
	);
};

export default CarouselComp;
