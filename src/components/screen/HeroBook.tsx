import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../ui/Button';

const HeroBook = () => {
  return (
    <div className="text-neutral-500 pb-8">
      <h6
        className="text-orange-400 text-lg font-light mb-2"
        style={{
          letterSpacing: '1.25rem',
        }}
      >
        BEST MANAGEMENT
      </h6>
      <h1 className="text-violet-950 text-[3.13rem] leading-none font-semibold">
        Think and Grow Rich
      </h1>
      <ul className="inline-flex list-disc mb-9">
        <li className="list-item">
          <a
            className="text-violet-950 text-lg mr-5"
            href="https://bookland.dexignzone.com/react/demo/index-2"
          >
            Napoleon Hill
          </a>
        </li>
        <li className="list-item">
          <a
            className="text-violet-950 text-lg mr-5"
            href="https://bookland.dexignzone.com/react/demo/index-2"
          >
            Business & Strategy
          </a>
        </li>
      </ul>
      <p className="border-l text-violet-950 pl-8 border-zinc-700 border-solid">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </p>
      <div className="items-center inline-flex my-6">
        <span className="text-orange-400 text-3xl font-semibold">$10.4</span>
        <div className="text-slate-500 text-lg px-3 line-through">$15.25</div>
        <span className="h-6 self-center bg-pink-600 text-white text-[0.69rem] font-semibold text-center rounded-md p-1.5">
          33% OFF
        </span>
      </div>
      <div>
        <Link to="/">
          <PrimaryButton>All Books</PrimaryButton>
        </Link>{' '}
        <Link to="/">
          <SecondaryButton>See Details</SecondaryButton>
        </Link>
      </div>
    </div>
  );
};

export default HeroBook;
