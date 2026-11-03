export type Brand = {
  name: string;
  meta: string;
  stat: string;
  statLabel: string;
  avatar?: string;
  verified?: boolean;
};

export const brands: Brand[] = [
  {
    name: "Parathamati",
    meta: "YouTube · 13.7K subscribers",
    stat: "10M+",
    statLabel: "views generated",
    avatar: "/avatars/para.jpeg",
  },
  {
    name: "MiorDevotion",
    meta: "Instagram · 3.7K followers",
    stat: "5M+",
    statLabel: "views generated",
    avatar: "/avatars/mior.jpeg",
  },
  {
    name: "Vinny Soni & Realestatewith Ashwin",
    meta: "Real estate creators · Instagram",
    stat: "2M+",
    statLabel: "views generated",
    avatar: "/avatars/vinny.jpeg",
    verified: true,
  },
  {
    name: "Global EXIM Institute",
    meta: "Instagram · 129K followers",
    stat: "2K+",
    statLabel: "leads from ad creatives",
    avatar: "/avatars/exim.jpeg",
  },
  {
    name: "Dr. Koteswara Rao",
    meta: "Founder & CEO · 94.2K followers",
    stat: "2K+",
    statLabel: "leads, same campaign",
    avatar: "/avatars/rao.jpeg",
  },
  {
    name: "Moonlight Dreams · Secret Soldier",
    meta: "Telugu movie · 7.7K followers",
    stat: "2M+",
    statLabel: "views on trailer and promo campaign",
    avatar: "/avatars/moon.jpeg",
  },
  {
    name: "Corporate event videos",
    meta: "Internal videos for big tech companies",
    stat: "Corporate",
    statLabel: "edits for large teams",
  },
];
