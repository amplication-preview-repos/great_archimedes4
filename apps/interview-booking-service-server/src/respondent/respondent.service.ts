import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RespondentServiceBase } from "./base/respondent.service.base";

@Injectable()
export class RespondentService extends RespondentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
