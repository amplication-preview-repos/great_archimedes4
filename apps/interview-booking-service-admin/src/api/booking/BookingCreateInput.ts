import { RespondentWhereUniqueInput } from "../respondent/RespondentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewCreateNestedManyWithoutBookingsInput } from "./InterviewCreateNestedManyWithoutBookingsInput";

export type BookingCreateInput = {
  date?: Date | null;
  status?: "Option1" | null;
  respondent?: RespondentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  interviews?: InterviewCreateNestedManyWithoutBookingsInput;
};
