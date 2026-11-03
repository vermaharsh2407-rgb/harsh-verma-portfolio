export type Project = {
  title: string;
  client: string;
  category: string;
  driveId: string;
};

export const DRIVE_FILE_BASE = "https://drive.google.com/file/d/";

export const driveFileUrl = (id: string) => `${DRIVE_FILE_BASE}${id}/view`;

export const drivePreviewUrl = (id: string) =>
  `${DRIVE_FILE_BASE}${id}/preview`;

export const driveStreamUrl = (id: string) =>
  `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t#t=0.1`;

export const projects: Project[] = [
  {
    title: "Social Cause Reel",
    client: "Akshyapatra",
    category: "Reels",
    driveId: "1waSxdmerUx-jXUuvaF-LzE_oEmuk4_B6",
  },
  {
    title: "15M Hook Video",
    client: "Hook format",
    category: "Reels",
    driveId: "172hnLuX5s7WgM3aD6PmqqGyXFVf8EmhP",
  },
  {
    title: "Corporate Event Reel",
    client: "Corporate",
    category: "Reels",
    driveId: "1j9YbTfFlkjwOVDms_AI_vEwhLE4PvYfQ",
  },
  {
    title: "CEO Coach Reel",
    client: "CEO Coach",
    category: "Reels",
    driveId: "1ysspJwJioRpzPt2G9Dfip4MB-k4JVaTt",
  },
  {
    title: "CEO Coach Reel 2",
    client: "CEO Coach",
    category: "Reels",
    driveId: "1KDxKbpM1z6psx345S-PgF11oI3HF8p4Q",
  },
  {
    title: "Hiring Reel",
    client: "Shweena",
    category: "Reels",
    driveId: "1RPXD28mtI4DWUGmE6XR62hKwM_N735LJ",
  },
  {
    title: "Booking Urgency Video",
    client: "Urgency format",
    category: "Reels",
    driveId: "1lsX3HHoJ6jRlKo3NxYtEYV-T_GgymQqp",
  },
  {
    title: "Dr. Sanjay · Apollo Hospital",
    client: "Apollo Hospital",
    category: "Healthcare",
    driveId: "1uuVpt4eHJcbL42EP8Tr1LAO3WdITgPDZ",
  },
  {
    title: "Dr. Sanjay · Prostate Biopsy",
    client: "Healthcare",
    category: "Healthcare",
    driveId: "1G2PZMpGQdUonK7-MZf5Ulqb5JdnjGIHL",
  },
  {
    title: "Dr. Sanjay · PSA Test",
    client: "Healthcare",
    category: "Healthcare",
    driveId: "1fzqiQ5bbiRCJ-dgdL5_ru3tlLIcdTvUq",
  },
  {
    title: "Global Exim Institute Ad",
    client: "Global Exim Institute",
    category: "Ads",
    driveId: "10fVuKlKYBXbf-kvXNJICTiW_VOxBNhiF",
  },
  {
    title: "Global Exim Institute Corporate Ad",
    client: "Global Exim Institute",
    category: "Ads",
    driveId: "1m1Uo1fHCyH9TqIcI9q51skwOIKFrjN3H",
  },
  {
    title: "9 Step Framework Ad",
    client: "Global Exim Institute",
    category: "Ads",
    driveId: "1kOBV5xFK_QPjRXxwEY5Zm0iUqIL1J_KZ",
  },
  {
    title: "Global Exim Institute Ad 2",
    client: "Global Exim Institute",
    category: "Ads",
    driveId: "1fouHkLPl9EHVb1RDmfhN5U4SZf2zyhUN",
  },
  {
    title: "Global Exim Institute Call Ad",
    client: "Global Exim Institute",
    category: "Ads",
    driveId: "1aCfrcYqAJdekspC6utQAPTq0HlMizTVZ",
  },
  {
    title: "Suryon Ad",
    client: "Suryon",
    category: "Ads",
    driveId: "1n0J3cachiJDBOMaoJ6A2DgXSQ6xvnkIT",
  },
  {
    title: "Event Ad",
    client: "Events",
    category: "Ads",
    driveId: "1b2pRvli_wy56rAIarhVpCU2eHeKR4MEU",
  },
  {
    title: "AI Talking Head Ad",
    client: "AI-assisted",
    category: "Ads",
    driveId: "1JlNHzrkmwUV1iB6Ke5q7Gtsoarto9uaS",
  },
  {
    title: "Auro Anantha",
    client: "Real estate",
    category: "Campaigns",
    driveId: "1sCdZ7dXbkJkYL4XGnlyGwPxWV9jl-Wwr",
  },
  {
    title: "Modular Kitchen Campaign",
    client: "Home & interiors",
    category: "Campaigns",
    driveId: "1oZogJj_-Dw6AwCgjIdfuDeVh60FVY10_",
  },
  {
    title: "ISDE",
    client: "Brand film",
    category: "Campaigns",
    driveId: "1WSLF55JE5YwFf2xumuKR0BXQdRulXOdH",
  },
];

export const hues: Record<string, [number, number]> = {
  Reels: [24, 8],
  Healthcare: [190, 215],
  Ads: [38, 18],
  Campaigns: [48, 28],
  "Corporate edits": [215, 235],
};

export const featuredIds = new Set([
  "1ysspJwJioRpzPt2G9Dfip4MB-k4JVaTt",
  "1j9YbTfFlkjwOVDms_AI_vEwhLE4PvYfQ",
  "1sCdZ7dXbkJkYL4XGnlyGwPxWV9jl-Wwr",
  "1kOBV5xFK_QPjRXxwEY5Zm0iUqIL1J_KZ",
  "1fouHkLPl9EHVb1RDmfhN5U4SZf2zyhUN",
  "1oZogJj_-Dw6AwCgjIdfuDeVh60FVY10_",
]);

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
  "Corporate edits",
];

export const clients = [
  "Parathamati",
  "MiorDevotion",
  "Vinny Soni",
  "Realestatewith Ashwin",
  "Global Exim Institute",
  "Moonlight Dreams",
  "Corporate edits",
  "Apollo Hospital",
  "CEO Coach",
  "Suryon",
  "Akshyapatra",
  "Shweena",
  "Auro Anantha",
  "ISDE",
];
