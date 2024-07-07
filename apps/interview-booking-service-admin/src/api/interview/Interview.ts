import { Booking } from "../booking/Booking";

export type Interview = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number | null;
  topic: string | null;
  booking?: Booking | null;
};
