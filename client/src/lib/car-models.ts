export const CAR_BRANDS = [
  "Audi",
  "BMW",
  "Citroen",
  "Dacia",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Mazda",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Renault",
  "Seat",
  "Skoda",
  "Suzuki",
  "Toyota",
  "Volkswagen",
  "Volvo"
];

export function getCarModels(brand: string): string[] {
  const models: Record<string, string[]> = {
    "Audi": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "e-tron"],
    "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "i3", "i4", "i8"],
    "Citroen": ["C1", "C3", "C4", "C5", "Berlingo", "Jumpy", "Spacetourer"],
    "Dacia": ["Duster", "Logan", "Sandero", "Spring"],
    "Fiat": ["500", "Panda", "Tipo", "Doblo", "Ducato"],
    "Ford": ["Fiesta", "Focus", "Kuga", "Mondeo", "Mustang", "Puma", "Ranger", "Transit"],
    "Honda": ["Civic", "CR-V", "HR-V", "Jazz", "e"],
    "Hyundai": ["i10", "i20", "i30", "Tucson", "Kona", "IONIQ", "Santa Fe"],
    "Kia": ["Picanto", "Rio", "Ceed", "Sportage", "Sorento", "Niro", "e-Niro", "e-Soul"],
    "Mazda": ["2", "3", "6", "CX-3", "CX-30", "CX-5", "MX-5", "MX-30"],
    "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "EQA", "EQB", "EQC", "EQE", "EQS"],
    "Mitsubishi": ["ASX", "Eclipse Cross", "Outlander", "Space Star"],
    "Nissan": ["Juke", "Leaf", "Micra", "Qashqai", "X-Trail"],
    "Opel": ["Astra", "Corsa", "Crossland", "Grandland X", "Insignia", "Mokka"],
    "Peugeot": ["108", "208", "308", "508", "2008", "3008", "5008", "Rifter", "Traveller"],
    "Renault": ["Clio", "Captur", "Kadjar", "Megane", "Talisman", "Twingo", "Zoe"],
    "Seat": ["Ibiza", "Leon", "Arona", "Ateca", "Tarraco", "Alhambra"],
    "Skoda": ["Citigo", "Fabia", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Scala", "Superb"],
    "Suzuki": ["Ignis", "Swift", "Vitara", "S-Cross", "Jimny"],
    "Toyota": ["Aygo", "Corolla", "Yaris", "RAV4", "C-HR", "Camry", "Prius", "Land Cruiser", "Hilux"],
    "Volkswagen": ["Golf", "Polo", "Passat", "Tiguan", "T-Cross", "T-Roc", "Touran", "Touareg", "ID.3", "ID.4"],
    "Volvo": ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90", "C40"]
  };

  return models[brand] || [];
}