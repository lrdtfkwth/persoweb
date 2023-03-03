import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from 'components/mdx';
import { allBytes } from 'contentlayer/generated';
import { format } from 'date-fns';


export async function generateStaticParams() {
    return allBytes.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params, }): Promise<Metadata | undefined> {
    const post = allBytes.find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    const {
        title,
        summary: description,
    } = post;

    return {
        title,
        description,
    };
}

export default async function Bytes({ params }) {

    const post = allBytes.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <h1 className="font-bold text-3xl font-serif max-w-[650px]">
                {post.title}
            </h1>
            <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
                <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                    {format(new Date(post.publishedAt), 'dd-MM-yy')}
                </p>
                <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
            </div>
            <Mdx code={post.body.code} />
        </section>
    );
}

