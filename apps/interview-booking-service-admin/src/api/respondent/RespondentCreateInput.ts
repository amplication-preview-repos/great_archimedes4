import { BookingCreateNestedManyWithoutRespondentsInput } from "./BookingCreateNestedManyWithoutRespondentsInput";

export type RespondentCreateInput = {
  email?: string | null;
  country?: "Option1" | null;
  available?: boolean | null;
  name?: string | null;
  bookings?: BookingCreateNestedManyWithoutRespondentsInput;
};
