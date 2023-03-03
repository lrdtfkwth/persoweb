import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { allBytes } from 'contentlayer/generated';


export const metadata: Metadata = {
  title: 'Bytes',
  description: 'Read my thoughts on software, hacking, and more.',
};

export default async function BytePage() {

    return (
        <section>
            <h1 className="font-bold text-3xl font-serif mb-5">Bytes</h1>
            { allBytes
                .sort((a, b) => {
                    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                <Link
                    key={post.slug}
                    className="flex flex-col space-y-1 mb-4"
                    href={`/bytes/${post.slug}`}
                >
                    <div className="w-full flex flex-col">
                        <p>{post.title}</p>
                        <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                            {format(new Date(post.publishedAt), 'dd-MM-yy')}
                        </p>
                    </div>
                </Link>
            ))}
        </section>
    );
}
