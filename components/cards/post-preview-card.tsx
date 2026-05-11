import type { CommunityPost } from "@/types/domain";

export function PostPreviewCard({ post }: { post: CommunityPost }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-semibold text-fuchsia-200">By {post.authorName}</p>
      <h3 className="mt-2 text-xl font-black text-white">{post.title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{post.excerpt}</p>
      <div className="mt-5 flex gap-4 text-sm text-zinc-400">
        <span>{post.commentCount} comments</span>
        <span>{post.reactionCount} reactions</span>
      </div>
    </article>
  );
}
