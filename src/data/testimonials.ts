export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yang saya suka dari Dr. Gym Fitness itu fasilitasnya cukup lengkap dan harganya masih terjangkau. Buat yang serius latihan tapi tetap ingin budget-friendly, menurut saya gym ini worth it.",
    name: "Fathur",
    role: "Member",
  },
  {
    quote:
      "Trainer-nya ramah dan sangat membantu buat pemula seperti saya. Harga juga sangat bersahabat dibanding gym lain di daerah sini.",
    name: "Rizky",
    role: "Member",
  },
  {
    quote:
      "Tempatnya nyaman, bersih, dan alatnya cukup lengkap. Buka sampai malam juga jadi nilai plus buat saya yang sering pulang kerja malam.",
    name: "Amanda",
    role: "Member",
  },
];
