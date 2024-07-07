import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "topic";

export const InterviewTitle = (record: TInterview): string => {
  return record.topic?.toString() || String(record.id);
};
