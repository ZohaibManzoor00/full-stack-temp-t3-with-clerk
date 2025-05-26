ALTER TABLE "products" ALTER COLUMN "owner_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "owner_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "owner_id" DROP NOT NULL;