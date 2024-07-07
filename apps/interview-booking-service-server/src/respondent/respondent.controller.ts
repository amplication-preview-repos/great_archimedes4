import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RespondentService } from "./respondent.service";
import { RespondentControllerBase } from "./base/respondent.controller.base";

@swagger.ApiTags("respondents")
@common.Controller("respondents")
export class RespondentController extends RespondentControllerBase {
  constructor(
    protected readonly service: RespondentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
