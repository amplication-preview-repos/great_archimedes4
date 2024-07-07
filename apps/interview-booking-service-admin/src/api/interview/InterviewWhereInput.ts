import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type InterviewWhereInput = {
  id?: StringFilter;
  duration?: IntNullableFilter;
  topic?: StringNullableFilter;
  booking?: BookingWhereUniqueInput;
};
