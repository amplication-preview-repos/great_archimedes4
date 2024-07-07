/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumBookingStatus } from "./EnumBookingStatus";
import { RespondentWhereUniqueInput } from "../../respondent/base/RespondentWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { InterviewCreateNestedManyWithoutBookingsInput } from "./InterviewCreateNestedManyWithoutBookingsInput";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumBookingStatus,
  })
  @IsEnum(EnumBookingStatus)
  @IsOptional()
  @Field(() => EnumBookingStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => RespondentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RespondentWhereUniqueInput)
  @IsOptional()
  @Field(() => RespondentWhereUniqueInput, {
    nullable: true,
  })
  respondent?: RespondentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InterviewCreateNestedManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => InterviewCreateNestedManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => InterviewCreateNestedManyWithoutBookingsInput, {
    nullable: true,
  })
  interviews?: InterviewCreateNestedManyWithoutBookingsInput;
}

export { BookingCreateInput as BookingCreateInput };
