import { PostPreviewCard } from "@/components/cards/post-preview-card";
import { SectionHeader } from "@/components/ui/section-header";
import { communityPosts } from "@/constants/placeholder-data";

export default function CommunityPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Community" title="The afterparty feed" description="A placeholder community surface for event recaps, attendee connections, comments, and moderation tools in future phases." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {communityPosts.map((post) => (
          <PostPreviewCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
}
