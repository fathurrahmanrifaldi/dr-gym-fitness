export interface Facility {
  icon: string; // Lucide icon name
  title: string;
  description: string;
  isFavorite?: boolean;
}

export const facilities: Facility[] = [
  {
    icon: "Dumbbell",
    title: "Weight Training",
    description:
      "Peralatan dumbbell, barbell, dan mesin yang lengkap untuk mendukung latihan kekuatan dan pembentukan otot.",
  },
  {
    icon: "Lock",
    title: "Locker Room",
    description:
      "Area penyimpanan untuk membantu menjaga barang bawaan tetap rapi selama kamu berlatih.",
  },
  {
    icon: "Scale",
    title: "Cek Body Composition",
    description:
      "Pantau berat badan dan komposisi tubuh untuk membantu melihat perkembangan latihanmu.",
  },
  {
    icon: "Droplets",
    title: "Water Refill",
    description:
      "Fasilitas isi ulang air untuk membantu kamu tetap terhidrasi selama latihan.",
  },
  {
    icon: "Car",
    title: "Parking",
    description:
      "Area parkir yang tersedia untuk kendaraan motor maupun mobil.",
  },
  {
    icon: "Swords",
    title: "Punching Bag",
    description:
      "Samsak untuk mendukung latihan pukulan, cardio, dan conditioning.",
    isFavorite: true,
  },
  {
    icon: "DoorOpen",
    title: "Toilet",
    description:
      "Fasilitas toilet yang tersedia untuk menunjang kenyamanan selama berada di gym.",
  },
  {
    icon: "Moon",
    title: "Mushola",
    description:
      "Mushola yang tersedia bagi member untuk beribadah dengan nyaman.",
  },
  {
    icon: "Wifi",
    title: "Wi-Fi",
    description:
      "Wi-Fi tersedia untuk menunjang kebutuhanmu selama berada di gym.",
  },
];
