export const weekdayEvents = [
  { day: "Monday", title: "Bingo", time: "18:00" },
  { day: "Tuesday", title: "Karaoke", time: "19:00" },
  { day: "Wednesday", title: "Open Mic", time: "20:00" },
  { day: "Thursday", title: "Ladies Night", time: "19:00" },
  { day: "Friday", title: "DJ Night", time: "21:00" },
  { day: "Saturday", title: "Live Performance", time: "21:00" },
  { day: "Sunday", title: "Chill Sessions", time: "17:00" },
] as const;

export const pastEventSlides = [
  {
    src: "/images/IMG-20260519-WA0001.jpg",
    title: "Packed dancefloor",
    caption: "Past event energy from the Night Events archive.",
  },
  {
    src: "/images/IMG-20260519-WA0002.jpg",
    title: "Neon crowd moments",
    caption: "Replace these images anytime in `public/images`.",
  },
  {
    src: "",
    title: "Next memory loading",
    caption: "Clean placeholder slide for future event photography.",
  },
] as const;

export const placeholderPages = {
  about: {
    eyebrow: "About",
    title: "Built for nights people remember",
    description: "A placeholder page for the brand story, venue partnerships, and the Night Events mission.",
  },
  staff: {
    eyebrow: "Staff",
    title: "Meet the crew behind the chaos",
    description: "A placeholder page for hosts, DJs, photographers, promoters, and operations staff.",
  },
  corporate: {
    eyebrow: "Corporate Functions",
    title: "Private nights with premium production",
    description: "A placeholder page for corporate event packages, private bookings, team functions, and branded experiences.",
  },
  signup: {
    eyebrow: "Sign Up",
    title: "Join the guest list",
    description: "A placeholder sign-up page. Supabase Auth will be wired in a later phase.",
  },
} as const;
