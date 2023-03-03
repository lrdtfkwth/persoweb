import type { Metadata } from 'next';
import {
  ArrowIcon,
} from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'someone how make code work, but hate coding',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Toufik. I call myself <b>lrdtfkwth</b> online.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently work at <b>"no work"</b>, where I spend my whole day
          wasting time on stupid things. I focus on <b>nothing</b> these days.
        </p>
        <hr />
        <p>
          I'm not passionate about many thnigs, including learning, hacking, 
          coding, and of course, everything related to IT. This ignorance 
          is what ultimately led me to my current role in wasting potential.
        </p>
        <p>
          I <b>hate</b> building for the web. From something as simple as a
          single HTML file – all the way to large Next.js applications. 
          The web is incredibly boring. Anyone can become a developer, writer, 
          or creator – and no one has to ask for permission.
        </p>
        <p>
          Overall, I'm a <b>extremely bored</b>. and I should probably change 
          career, and restart from 0, or maybe I just need to disappear. 
        </p>
        <p className="mb-8">
          do not email, or try to contact.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/lrdtfkwth"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/lrdtfkwth"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
