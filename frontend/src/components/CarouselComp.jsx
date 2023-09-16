import { Carousel } from '@mantine/carousel';

const CarouselComp = () => {
	return (
		<Carousel slideSize='70%' height={200} slideGap='xs' controlsOffset='xs' controlSize={20} loop withControls={false} withIndicators>
			<Carousel.Slide>1</Carousel.Slide>
			<Carousel.Slide>2</Carousel.Slide>
			<Carousel.Slide>3</Carousel.Slide>
		</Carousel>
	);
};

export default CarouselComp;
