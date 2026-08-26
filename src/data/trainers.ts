export interface Trainer {
  name: string;
  role: string;
  specializations: string[];
  description: string;
  image: string;
}

export const trainers: Trainer[] = [
  {
    name: "Coach Ridwan",
    role: "Certified Personal Trainer",
    specializations: ["Muscle Gain", "Fat Loss", "Body Recomposition"],
    description:
      "Membantu kamu menyusun dan menjalankan program latihan sesuai dengan tujuan pembentukan tubuh dan kebugaran.",
    image: "/images/coach_ridwan.png",
  },
  {
    name: "Coach Putra",
    role: "Certified Personal Trainer",
    specializations: ["Muscle Gain", "Fat Loss", "Body Recomposition"],
    description:
      "Mendampingi proses latihan untuk membantu meningkatkan massa otot, mengurangi lemak tubuh, dan mencapai komposisi tubuh yang lebih ideal.",
    image: "/images/coach_putra.png",
  },
  {
    name: "Coach Adhe",
    role: "Certified Personal Trainer",
    specializations: ["Muscle Gain", "Fat Loss", "Body Recomposition"],
    description:
      "Membantu mengarahkan latihan secara terstruktur agar kamu dapat berlatih lebih efektif dan konsisten menuju targetmu.",
    image: "/images/coach_adhe.png",
  },
];
