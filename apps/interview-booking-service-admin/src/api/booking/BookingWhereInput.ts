import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RespondentWhereUniqueInput } from "../respondent/RespondentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";

export type BookingWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  status?: "Option1";
  respondent?: RespondentWhereUniqueInput;
  user?: UserWhereUniqueInput;
  interviews?: InterviewListRelationFilter;
};
