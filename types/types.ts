/**
 * Represents form data from input elements.
 */
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  make: string;
  model: string;
  year: number;
  color: string;
  condition: string;
  foundUs: string;
  drivingRoutine: string;
  address: string;
  averageMilesPerWeek: string;
  averageMilesPerWeekend: string;
  rideShareDriver: boolean;
  [key: string]: string | number | boolean;
}
