import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding and hacking",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding and hacking.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>kajib standard scientific calculator Mh-991Esplus</li>
          <li>my bed</li>
          <li>big pillow</li>
        </ul>
        <h3 id="coding-hacking">Coding / Hacking</h3>
        <ul>
          <li>spoon</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>pen</li>
          <li>pencil</li>
          <li>paper</li>
        </ul>
      </div>
    </section>
  );
}
