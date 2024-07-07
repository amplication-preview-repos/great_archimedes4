import { RespondentWhereUniqueInput } from "../respondent/RespondentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewUpdateManyWithoutBookingsInput } from "./InterviewUpdateManyWithoutBookingsInput";

export type BookingUpdateInput = {
  date?: Date | null;
  status?: "Option1" | null;
  respondent?: RespondentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  interviews?: InterviewUpdateManyWithoutBookingsInput;
};
