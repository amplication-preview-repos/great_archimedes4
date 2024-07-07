/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Interview } from "./Interview";
import { InterviewCountArgs } from "./InterviewCountArgs";
import { InterviewFindManyArgs } from "./InterviewFindManyArgs";
import { InterviewFindUniqueArgs } from "./InterviewFindUniqueArgs";
import { CreateInterviewArgs } from "./CreateInterviewArgs";
import { UpdateInterviewArgs } from "./UpdateInterviewArgs";
import { DeleteInterviewArgs } from "./DeleteInterviewArgs";
import { Booking } from "../../booking/base/Booking";
import { InterviewService } from "../interview.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Interview)
export class InterviewResolverBase {
  constructor(
    protected readonly service: InterviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "read",
    possession: "any",
  })
  async _interviewsMeta(
    @graphql.Args() args: InterviewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Interview])
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "read",
    possession: "any",
  })
  async interviews(
    @graphql.Args() args: InterviewFindManyArgs
  ): Promise<Interview[]> {
    return this.service.interviews(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Interview, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "read",
    possession: "own",
  })
  async interview(
    @graphql.Args() args: InterviewFindUniqueArgs
  ): Promise<Interview | null> {
    const result = await this.service.interview(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Interview)
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "create",
    possession: "any",
  })
  async createInterview(
    @graphql.Args() args: CreateInterviewArgs
  ): Promise<Interview> {
    return await this.service.createInterview({
      ...args,
      data: {
        ...args.data,

        booking: args.data.booking
          ? {
              connect: args.data.booking,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Interview)
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "update",
    possession: "any",
  })
  async updateInterview(
    @graphql.Args() args: UpdateInterviewArgs
  ): Promise<Interview | null> {
    try {
      return await this.service.updateInterview({
        ...args,
        data: {
          ...args.data,

          booking: args.data.booking
            ? {
                connect: args.data.booking,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Interview)
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "delete",
    possession: "any",
  })
  async deleteInterview(
    @graphql.Args() args: DeleteInterviewArgs
  ): Promise<Interview | null> {
    try {
      return await this.service.deleteInterview(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Booking, {
    nullable: true,
    name: "booking",
  })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async getBooking(
    @graphql.Parent() parent: Interview
  ): Promise<Booking | null> {
    const result = await this.service.getBooking(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
