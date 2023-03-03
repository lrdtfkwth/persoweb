import Link from 'next/link';
import { ArrowIcon } from 'components/icons';
import { name, about, bio } from 'lib/info';

export const revalidate = 60;

export default function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/lrdtfkwth"
          >
            <ArrowIcon />
            <p className="h-7">checkout my github</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
