import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  status?: SortOrder;
  respondentId?: SortOrder;
  userId?: SortOrder;
};
