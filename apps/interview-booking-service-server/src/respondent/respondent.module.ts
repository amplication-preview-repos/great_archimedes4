import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RespondentModuleBase } from "./base/respondent.module.base";
import { RespondentService } from "./respondent.service";
import { RespondentController } from "./respondent.controller";
import { RespondentResolver } from "./respondent.resolver";

@Module({
  imports: [RespondentModuleBase, forwardRef(() => AuthModule)],
  controllers: [RespondentController],
  providers: [RespondentService, RespondentResolver],
  exports: [RespondentService],
})
export class RespondentModule {}
