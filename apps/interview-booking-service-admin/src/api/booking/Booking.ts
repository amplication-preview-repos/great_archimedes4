import { Respondent } from "../respondent/Respondent";
import { User } from "../user/User";
import { Interview } from "../interview/Interview";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  status?: "Option1" | null;
  respondent?: Respondent | null;
  user?: User | null;
  interviews?: Array<Interview>;
};
