export const publicNavItems = [
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Merch" },
  { href: "/community", label: "Community" },
] as const;

export const accountNavItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin", label: "Admin" },
] as const;

export const adminCards = [
  { href: "/admin/events", title: "Manage Events", description: "Create, publish, and update event listings." },
  { href: "/admin/tickets", title: "Manage Tickets", description: "Configure ticket tiers, inventory, and pricing." },
  { href: "/admin/merchandise", title: "Manage Merchandise", description: "Add products, track inventory, and prepare drops." },
  { href: "/admin/community", title: "Manage Community", description: "Review posts, comments, and moderation queues." },
  { href: "/admin/users", title: "Manage Users", description: "View profiles, roles, and account status." },
  { href: "/admin/loyalty", title: "Loyalty System", description: "Plan points, rewards, and future discounts." },
] as const;
