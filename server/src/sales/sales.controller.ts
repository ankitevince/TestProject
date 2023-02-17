import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiCreatedResponse, ApiBody, ApiProperty } from "@nestjs/swagger";
import { User } from "../user/base/User";
// import { Sales } from "./sales.model";
import { SalesService } from "./sales.service";
import { CreateSalesBodyDTO } from './sales.dto';
import { IsString, IsNumber, IsDate, IsOptional, IsJSON } from "class-validator";
import { Sales  } from "@prisma/client";



@Controller('sales')
@ApiTags('Sales')
export class SalesController {
	constructor(
		private salesService: SalesService
	) { }

	@Post()
	@ApiBody({ type: CreateSalesBodyDTO })
	addSales(@Body() body: Sales) {
		return this.salesService.add(body);
	}
}