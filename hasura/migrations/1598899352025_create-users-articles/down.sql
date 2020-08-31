

ALTER TABLE "public"."users" ALTER COLUMN "updated_at" DROP NOT NULL;

ALTER TABLE "public"."users" ALTER COLUMN "created_at" DROP NOT NULL;

DROP TRIGGER IF EXISTS "set_public_users_updated_at" ON "public"."users";
ALTER TABLE "public"."users" DROP COLUMN "updated_at";

ALTER TABLE "public"."users" DROP COLUMN "created_at";

ALTER TABLE "public"."users" DROP CONSTRAINT "users_display_id_key";

DROP TABLE "public"."articles";

DROP TABLE "public"."users";

ALTER TABLE "public"."users" ALTER COLUMN "updated_at" DROP NOT NULL;

ALTER TABLE "public"."users" ALTER COLUMN "created_at" DROP NOT NULL;

DROP TRIGGER IF EXISTS "set_public_users_updated_at" ON "public"."users";
ALTER TABLE "public"."users" DROP COLUMN "updated_at";

ALTER TABLE "public"."users" DROP COLUMN "created_at";

ALTER TABLE "public"."users" DROP CONSTRAINT "users_display_id_key";

DROP TABLE "public"."articles";

DROP TABLE "public"."users";
