import { Booking } from "../booking/Booking";

export type Respondent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  country?: "Option1" | null;
  available: boolean | null;
  name: string | null;
  bookings?: Array<Booking>;
};
