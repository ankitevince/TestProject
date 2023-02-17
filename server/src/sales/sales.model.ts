export class Sales {
	constructor(
		public id: String,
		public orderId: String,
		public price: Number,
		public date: Date,
		public status: String,
		public paymentMethod: String,
		public transactionId: String,
		public invoiceUrl: String,
		public createdAt: Date,
		public updatedAt: Date,
	) {}
}

export class SalesPostPayload {
	constructor(
		public orderId: String,
		public price: Number,
		public date: Date,
		public status: String,
		public paymentMethod: String,
		public transactionId: String,
		public invoiceUrl: String,
		public createdAt: Date,
		public updatedAt: Date,
	) { }
}