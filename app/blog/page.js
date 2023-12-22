import Link from "next/link";
//📃📃[MORE PAGES]📃📃
export default function BlogPage() {
  return (
    <main>
      <h1>
        <p>
          <Link href="/blog/post-1">Post 1</Link>
        </p>
        <p>
          <Link href="/blog/post-2">Post 2</Link>
        </p>
      </h1>
    </main>
  );
}
