import { SortOrder } from "../../util/SortOrder";

export type RespondentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  country?: SortOrder;
  available?: SortOrder;
  name?: SortOrder;
};
