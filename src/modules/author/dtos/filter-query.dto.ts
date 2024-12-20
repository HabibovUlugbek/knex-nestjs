import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import type { FilterQueryInterface } from "../interfaces";

export class FilterQueryDto implements FilterQueryInterface {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  query?: string;
}
