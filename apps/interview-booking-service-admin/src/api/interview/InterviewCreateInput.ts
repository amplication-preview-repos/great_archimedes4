import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type InterviewCreateInput = {
  duration?: number | null;
  topic?: string | null;
  booking?: BookingWhereUniqueInput | null;
};
