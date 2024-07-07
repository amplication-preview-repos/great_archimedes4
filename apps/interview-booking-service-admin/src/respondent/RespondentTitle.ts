import { Respondent as TRespondent } from "../api/respondent/Respondent";

export const RESPONDENT_TITLE_FIELD = "name";

export const RespondentTitle = (record: TRespondent): string => {
  return record.name?.toString() || String(record.id);
};
