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
import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { EnumRespondentCountry } from "./EnumRespondentCountry";
import { BookingCreateNestedManyWithoutRespondentsInput } from "./BookingCreateNestedManyWithoutRespondentsInput";
import { Type } from "class-transformer";

@InputType()
class RespondentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumRespondentCountry,
  })
  @IsEnum(EnumRespondentCountry)
  @IsOptional()
  @Field(() => EnumRespondentCountry, {
    nullable: true,
  })
  country?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  available?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutRespondentsInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutRespondentsInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutRespondentsInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutRespondentsInput;
}

export { RespondentCreateInput as RespondentCreateInput };
