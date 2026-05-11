import { featuredEvents, ticketTypes } from "@/constants/placeholder-data";

export function getFeaturedEvents() {
  return featuredEvents;
}

export function getEventBySlug(slug: string) {
  return featuredEvents.find((event) => event.slug === slug);
}

export function getTicketTypesForEvent(eventId: string) {
  return ticketTypes.filter((ticket) => ticket.eventId === eventId);
}
