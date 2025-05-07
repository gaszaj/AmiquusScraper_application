export const CAR_BRANDS = [
  { value: 'audi', label: 'Audi' },
  { value: 'bmw', label: 'BMW' },
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },
  { value: 'mercedes', label: 'Mercedes-Benz' },
  { value: 'tesla', label: 'Tesla' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'kia', label: 'Kia' },
  { value: 'lexus', label: 'Lexus' },
  { value: 'mazda', label: 'Mazda' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'subaru', label: 'Subaru' },
  { value: 'volvo', label: 'Volvo' }
];

const CAR_MODELS: Record<string, string[]> = {
  audi: ['A1', 'A3', 'A4', 'A5', 'A6', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron'],
  bmw: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'i3', 'i4', 'i8'],
  ford: ['Fiesta', 'Focus', 'Mustang', 'Explorer', 'F-150', 'Escape', 'Edge', 'Bronco', 'Ranger', 'Transit'],
  honda: ['Civic', 'Accord', 'CR-V', 'HR-V', 'Pilot', 'Fit', 'Odyssey', 'Ridgeline', 'Insight', 'Passport'],
  mercedes: ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE', 'GLS', 'CLA', 'EQC'],
  tesla: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck', 'Roadster'],
  toyota: ['Corolla', 'Camry', 'RAV4', 'Prius', 'Highlander', 'Tacoma', 'Tundra', '4Runner', 'Land Cruiser', 'Sienna'],
  volkswagen: ['Golf', 'Polo', 'Passat', 'Tiguan', 'T-Roc', 'ID.3', 'ID.4', 'Arteon', 'Atlas', 'Touareg'],
  chevrolet: ['Silverado', 'Equinox', 'Malibu', 'Tahoe', 'Suburban', 'Traverse', 'Blazer', 'Corvette', 'Camaro', 'Spark'],
  hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Palisade', 'Venue', 'Ioniq', 'Accent', 'Nexo'],
  kia: ['Sportage', 'Sorento', 'Forte', 'Optima', 'Soul', 'Telluride', 'Seltos', 'Niro', 'Carnival', 'K5'],
  lexus: ['RX', 'NX', 'ES', 'IS', 'GX', 'UX', 'LS', 'LC', 'LX', 'RC'],
  mazda: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'CX-30', 'MX-5 Miata', 'CX-3', 'CX-8', 'MX-30'],
  nissan: ['Altima', 'Sentra', 'Rogue', 'Pathfinder', 'Murano', 'Maxima', 'Kicks', 'Frontier', 'Titan', 'Leaf'],
  subaru: ['Outback', 'Forester', 'Impreza', 'Crosstrek', 'Legacy', 'Ascent', 'WRX', 'BRZ'],
  volvo: ['XC40', 'XC60', 'XC90', 'S60', 'S90', 'V60', 'V90', 'C40']
};

export function getCarModels(brand: string): string[] {
  return CAR_MODELS[brand] || [];
}

export default CAR_MODELS;
