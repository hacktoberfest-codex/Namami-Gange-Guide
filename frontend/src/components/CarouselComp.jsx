import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
			<CarouselItem imgURI={'https://images.pexels.com/photos/12112985/pexels-photo-12112985.jpeg?auto=compress&cs=tinysrgb&w=600'} />
			<CarouselItem imgURI={'https://images.pexels.com/photos/2239075/pexels-photo-2239075.jpeg?auto=compress&cs=tinysrgb&w=600'} />
			<CarouselItem imgURI={'https://images.pexels.com/photos/12904093/pexels-photo-12904093.jpeg?auto=compress&cs=tinysrgb&w=600'} />
		</Carousel>
	);
};

export default CarouselComp;
