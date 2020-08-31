
CREATE TABLE "public"."users"("id" UUID NOT NULL DEFAULT gen_random_uuid(), "display_id" text NOT NULL, "display_name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."articles"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "subject" text NOT NULL, "content" text NOT NULL, "author_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "published_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_articles_updated_at"
BEFORE UPDATE ON "public"."articles"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_articles_updated_at" ON "public"."articles" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

ALTER TABLE "public"."users" ADD CONSTRAINT "users_display_id_key" UNIQUE ("display_id");

ALTER TABLE "public"."users" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();

ALTER TABLE "public"."users" ADD COLUMN "updated_at" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_updated_at"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_users_updated_at" ON "public"."users" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

ALTER TABLE "public"."users" ALTER COLUMN "created_at" SET NOT NULL;

ALTER TABLE "public"."users" ALTER COLUMN "updated_at" SET NOT NULL;


CREATE TABLE "public"."users"("id" UUID NOT NULL DEFAULT gen_random_uuid(), "display_id" text NOT NULL, "display_name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."articles"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "subject" text NOT NULL, "content" text NOT NULL, "author_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "published_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_articles_updated_at"
BEFORE UPDATE ON "public"."articles"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_articles_updated_at" ON "public"."articles" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

ALTER TABLE "public"."users" ADD CONSTRAINT "users_display_id_key" UNIQUE ("display_id");

ALTER TABLE "public"."users" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();

ALTER TABLE "public"."users" ADD COLUMN "updated_at" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_updated_at"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_users_updated_at" ON "public"."users" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

ALTER TABLE "public"."users" ALTER COLUMN "created_at" SET NOT NULL;

ALTER TABLE "public"."users" ALTER COLUMN "updated_at" SET NOT NULL;
