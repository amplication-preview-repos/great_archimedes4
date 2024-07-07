import { BookingUpdateManyWithoutRespondentsInput } from "./BookingUpdateManyWithoutRespondentsInput";

export type RespondentUpdateInput = {
  email?: string | null;
  country?: "Option1" | null;
  available?: boolean | null;
  name?: string | null;
  bookings?: BookingUpdateManyWithoutRespondentsInput;
};
