/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Interview as PrismaInterview,
  Booking as PrismaBooking,
} from "@prisma/client";

export class InterviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InterviewCountArgs, "select">
  ): Promise<number> {
    return this.prisma.interview.count(args);
  }

  async interviews(
    args: Prisma.InterviewFindManyArgs
  ): Promise<PrismaInterview[]> {
    return this.prisma.interview.findMany(args);
  }
  async interview(
    args: Prisma.InterviewFindUniqueArgs
  ): Promise<PrismaInterview | null> {
    return this.prisma.interview.findUnique(args);
  }
  async createInterview(
    args: Prisma.InterviewCreateArgs
  ): Promise<PrismaInterview> {
    return this.prisma.interview.create(args);
  }
  async updateInterview(
    args: Prisma.InterviewUpdateArgs
  ): Promise<PrismaInterview> {
    return this.prisma.interview.update(args);
  }
  async deleteInterview(
    args: Prisma.InterviewDeleteArgs
  ): Promise<PrismaInterview> {
    return this.prisma.interview.delete(args);
  }

  async getBooking(parentId: string): Promise<PrismaBooking | null> {
    return this.prisma.interview
      .findUnique({
        where: { id: parentId },
      })
      .booking();
  }
}