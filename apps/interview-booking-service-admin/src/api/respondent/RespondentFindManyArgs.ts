import { RespondentWhereInput } from "./RespondentWhereInput";
import { RespondentOrderByInput } from "./RespondentOrderByInput";

export type RespondentFindManyArgs = {
  where?: RespondentWhereInput;
  orderBy?: Array<RespondentOrderByInput>;
  skip?: number;
  take?: number;
};
