import type { Localized } from "@/lib/i18n";

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  label: string;
  caption: Localized;
  skills: Skill[];
}

/** Levels are normalized from the source CV: Beginner → 2, Intermediate → 3, Advanced → 4. */
export const skillGroups: SkillGroup[] = [
  {
    id: "it",
    label: "Information Technology",
    caption: {
      id: "Membangun produk digital dari data sampai antarmuka.",
      en: "Building digital products from data to interface.",
    },
    skills: [
      { name: "Python", level: 3 },
      { name: "Flutter", level: 3 },
      { name: "Laravel", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "AI Knowledge & Agents", level: 3 },
      { name: "Microsoft Office", level: 3 },
    ],
  },
  {
    id: "multimedia",
    label: "Multimedia",
    caption: {
      id: "Merancang cerita visual dari frame pertama sampai warna akhir.",
      en: "Designing visual stories from the first frame to the final grade.",
    },
    skills: [
      { name: "Videography", level: 4 },
      { name: "Adobe Premiere Pro", level: 4 },
      { name: "Photography", level: 3 },
      { name: "Adobe After Effects", level: 3 },
      { name: "Adobe Lightroom", level: 3 },
      { name: "Adobe Photoshop", level: 2 },
    ],
  },
];
