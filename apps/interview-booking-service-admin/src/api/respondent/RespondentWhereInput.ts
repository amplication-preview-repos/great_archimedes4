import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type RespondentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  country?: "Option1";
  available?: BooleanNullableFilter;
  name?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
};
