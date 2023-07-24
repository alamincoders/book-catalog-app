import { Link } from 'react-router-dom';
import heroBooks from '../../assets/hero.png';
import Container from '../ui/Container';
import HeroBook from './HeroBook';

interface ISingleImageProps {
  imgSrc: string;
  href: string;
}

const Hero = () => {
  return (
    <>
      <div className="relative bg-[#f5f5f5] pt-[120px] lg:pt-[150px] mb-16">
        <Container>
          <div className="flex flex-wrap -mx-4 lg:items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <HeroBook />

                <div className="pt-16 clients">
                  <h6 className="flex items-center mb-3 text-xs font-normal text-body-color">
                    Some Of Our Clients
                    <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                  </h6>

                  <div className="flex items-center space-x-4 grayscale blur-[2px] ">
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative inline-block pt-11 lg:pt-0">
                  <img
                    src={heroBooks}
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }: ISingleImageProps) => {
  return (
    <>
      <Link to={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="w-full h-10" />
      </Link>
    </>
  );
};
