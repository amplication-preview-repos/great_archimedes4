import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type InterviewUpdateInput = {
  duration?: number | null;
  topic?: string | null;
  booking?: BookingWhereUniqueInput | null;
};
