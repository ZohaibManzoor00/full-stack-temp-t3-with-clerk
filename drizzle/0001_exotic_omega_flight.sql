ALTER TABLE "stores" ALTER COLUMN "owner_id" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "owner_id" SET NOT NULL;