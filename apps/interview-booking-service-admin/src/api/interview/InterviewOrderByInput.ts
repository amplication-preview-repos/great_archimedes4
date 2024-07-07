import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  duration?: SortOrder;
  topic?: SortOrder;
  bookingId?: SortOrder;
};
