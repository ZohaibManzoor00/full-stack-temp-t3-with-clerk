ALTER TABLE "products" ALTER COLUMN "owner_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "owner_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE serial;