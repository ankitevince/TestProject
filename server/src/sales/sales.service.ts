import { Injectable } from "@nestjs/common";
import {Prisma, Sales} from '@prisma/client';
import { PrismaService } from "../prisma/prisma.service";
import { CreateSalesBodyDTO } from "./sales.dto";



@Injectable()
export class SalesService{
	constructor(
		private prisma: PrismaService
	) {}
	// add(): Sales {
	async add(body: Sales): Promise<Sales> {
	// async add(body: CreateSalesBodyDTO): Promise<Sales|any> {
		let data = await this.prisma.sales.create({
			data: body
		});

		return data;
		// return {
		// 	sucess: true
		// }
	}
}