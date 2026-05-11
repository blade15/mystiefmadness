export type UserRole = "attendee" | "organizer" | "admin";

export type UserProfile = {
  id: string;
  email: string;
  fullName: string;
  username: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: string;
};

export type EventStatus = "draft" | "published" | "cancelled" | "completed";

export type Event = {
  id: string;
  slug: string;
  title: string;
  description: string;
  venue: string;
  city: string;
  startsAt: string;
  endsAt?: string;
  category: "concert" | "karaoke" | "party" | "games" | "social";
  imageUrl?: string;
  minPrice: number;
  currency: string;
  status: EventStatus;
  tags: string[];
};

export type TicketType = {
  id: string;
  eventId: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  quantityAvailable: number;
  quantitySold: number;
  salesStartAt?: string;
  salesEndAt?: string;
};

export type MerchandiseProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  imageUrl?: string;
  inventoryCount: number;
  isActive: boolean;
};

export type OrderStatus = "pending" | "paid" | "failed" | "refunded" | "cancelled";

export type Order = {
  id: string;
  userId: string;
  status: OrderStatus;
  provider: "stripe" | "yoco" | "manual";
  totalAmount: number;
  currency: string;
  createdAt: string;
};

export type CommunityPost = {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  excerpt: string;
  eventId?: string;
  createdAt: string;
  commentCount: number;
  reactionCount: number;
};

export type LoyaltyPoints = {
  id: string;
  userId: string;
  points: number;
  source: "event_attendance" | "ticket_purchase" | "merch_purchase" | "admin_adjustment";
  description: string;
  createdAt: string;
};
