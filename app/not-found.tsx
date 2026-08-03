import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <h1 className="font-head text-[clamp(60px,14vw,140px)] leading-none text-gradient font-bold">
        404
      </h1>
      <p className="text-muted mt-5 mb-7 text-lg">
        This page wandered off the network graph.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-grad text-white shadow-[0_8px_24px_-8px_rgba(59,107,255,0.6)]"
      >
        Back to home
      </Link>
    </div>
  );
}
