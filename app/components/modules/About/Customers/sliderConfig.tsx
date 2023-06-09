import Arrow from '@/app/components/common/icons/Arrow';
import { CustomArrowProps, Settings } from 'react-slick';

type SliderArrowProps = CustomArrowProps & {
  direction: 'right' | 'left';
};

const SliderArrow = ({ direction, onClick, className }: SliderArrowProps) => {
  // remove existing classes
  const updatedClassName = className?.replace(/slick\-(prev|next)/, '');
  return (
    <button onClick={onClick} className={`${updatedClassName} slider-arrow slider-arrow__${direction}`}>
      <Arrow direction={direction} />
    </button>
  );
};

const settings: Settings = {
  slidesToShow: 3,
  infinite: true,
  speed: 700,
  cssEase: 'cubic-bezier(.17,.67,.34,1.36)',
  arrows: true,
  autoplay: false,
  nextArrow: <SliderArrow direction="right" />,
  prevArrow: <SliderArrow direction="left" />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export default settings;
