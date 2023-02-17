/* Data transfer objects */

import { ObjectType, Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsDate } from "class-validator";

@ObjectType()
@InputType()
export class CreateSalesBodyDTO {
	@ApiProperty({
		required: true,
		type: Number,
		example: 120
	})
	@IsNumber()
	@Field(() => String, {
		nullable: true,
	})
	price!: Number;


	@ApiProperty({
		required: true,
		type: String,
		example: 'r9a5o4l290000vtr8uadb4v4x',
	})
	@IsString()
	@Field(() => String, {
		nullable: true,
	})
	orderId!: String;


	@ApiProperty({
		required: true,
		type: Date,
	})
	@IsDate()
	@Field(() => String, {
		nullable: true,
	})
	date!: Date;

	@ApiProperty({
		required: true,
		type: String,
		example: 'Delivered'
	})
	@IsString()

	@Field(() => String, {
		nullable: true,
	})
	status!: String;

	@ApiProperty({
		required: true,
		type: String,
		example: 'COD',

	})

	@Field(() => String, {
		nullable: true,
	})
	paymentMethod!: String;

	@ApiProperty({
		required: true,
		type: String,
	})
	@IsString()
	@Field(() => String, {
		nullable: true,
	})
	transactionId!: String;

	@ApiProperty({
		required: true,
		type: String,
	})
	@IsString()
	@Field(() => String, {
		nullable: true,
	})
	invoiceUrl!: String;
}