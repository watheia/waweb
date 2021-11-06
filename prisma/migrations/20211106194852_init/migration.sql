-- CreateTable
CREATE TABLE "components_elements_features" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "components_elements_logos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);

-- CreateTable
CREATE TABLE "components_elements_notification_banners" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT,
    "type" TEXT
);

-- CreateTable
CREATE TABLE "components_elements_plans" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "description" TEXT,
    "isRecommended" BOOLEAN,
    "price" REAL,
    "pricePeriod" TEXT
);

-- CreateTable
CREATE TABLE "components_elements_plans_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_elements_plan_id" INTEGER NOT NULL,
    CONSTRAINT "components_elements_plans_components_components_elements_plan_id_fkey" FOREIGN KEY ("components_elements_plan_id") REFERENCES "components_elements_plans" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_layout_footers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "smallText" TEXT
);

-- CreateTable
CREATE TABLE "components_layout_footers_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_layout_footer_id" INTEGER NOT NULL,
    CONSTRAINT "components_layout_footers_components_components_layout_footer_id_fkey" FOREIGN KEY ("components_layout_footer_id") REFERENCES "components_layout_footers" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_layout_navbars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "components_layout_navbars_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_layout_navbar_id" INTEGER NOT NULL,
    CONSTRAINT "components_layout_navbars_components_components_layout_navbar_id_fkey" FOREIGN KEY ("components_layout_navbar_id") REFERENCES "components_layout_navbars" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_links_buttons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT,
    "newTab" BOOLEAN,
    "text" TEXT,
    "type" TEXT
);

-- CreateTable
CREATE TABLE "components_links_footer_sections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);

-- CreateTable
CREATE TABLE "components_links_footer_sections_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_links_footer_section_id" INTEGER NOT NULL,
    CONSTRAINT "components_links_footer_sections_components_components_links_footer_section_id_fkey" FOREIGN KEY ("components_links_footer_section_id") REFERENCES "components_links_footer_sections" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_links_links" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT,
    "newTab" BOOLEAN,
    "text" TEXT
);

-- CreateTable
CREATE TABLE "components_links_simple_buttons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT,
    "type" TEXT
);

-- CreateTable
CREATE TABLE "components_meta_metadata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "twitterCardType" TEXT,
    "twitterUsername" TEXT
);

-- CreateTable
CREATE TABLE "components_sections_lead_forms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "emailPlaceholder" TEXT,
    "location" TEXT
);

-- CreateTable
CREATE TABLE "components_sections_lead_forms_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_sections_lead_form_id" INTEGER NOT NULL,
    CONSTRAINT "components_sections_lead_forms_components_components_sections_lead_form_id_fkey" FOREIGN KEY ("components_sections_lead_form_id") REFERENCES "components_sections_lead_forms" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_sections_pricings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);

-- CreateTable
CREATE TABLE "components_sections_pricings_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_sections_pricing_id" INTEGER NOT NULL,
    CONSTRAINT "components_sections_pricings_components_components_sections_pricing_id_fkey" FOREIGN KEY ("components_sections_pricing_id") REFERENCES "components_sections_pricings" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_sections_rich_texts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_bottom_actions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_bottom_actions_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_slices_bottom_action_id" INTEGER NOT NULL,
    CONSTRAINT "components_slices_bottom_actions_components_components_slices_bottom_action_id_fkey" FOREIGN KEY ("components_slices_bottom_action_id") REFERENCES "components_slices_bottom_actions" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_slices_feature_columns" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_feature_columns_groups" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "components_slices_feature_columns_groups_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_slices_feature_columns_group_id" INTEGER NOT NULL,
    CONSTRAINT "components_slices_feature_columns_groups_components_components_slices_feature_columns_group_id_fkey" FOREIGN KEY ("components_slices_feature_columns_group_id") REFERENCES "components_slices_feature_columns_groups" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_slices_feature_rows" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_feature_rows_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_slices_feature_row_id" INTEGER NOT NULL,
    CONSTRAINT "components_slices_feature_rows_components_components_slices_feature_row_id_fkey" FOREIGN KEY ("components_slices_feature_row_id") REFERENCES "components_slices_feature_rows" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_slices_feature_rows_groups" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "components_slices_feature_rows_groups_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_slices_feature_rows_group_id" INTEGER NOT NULL,
    CONSTRAINT "components_slices_feature_rows_groups_components_components_slices_feature_rows_group_id_fkey" FOREIGN KEY ("components_slices_feature_rows_group_id") REFERENCES "components_slices_feature_rows_groups" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_slices_heroes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "label" TEXT,
    "description" TEXT,
    "smallTextWithLink" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_heroes_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_slices_hero_id" INTEGER NOT NULL,
    CONSTRAINT "components_slices_heroes_components_components_slices_hero_id_fkey" FOREIGN KEY ("components_slices_hero_id") REFERENCES "components_slices_heroes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "components_slices_large_videos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_testimonials" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT,
    "authorName" TEXT,
    "authorTitle" TEXT,
    "link" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_testimonials_groups" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "components_slices_testimonials_groups_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "components_slices_testimonials_group_id" INTEGER NOT NULL,
    CONSTRAINT "components_slices_testimonials_groups_components_components_slices_testimonials_group_id_fkey" FOREIGN KEY ("components_slices_testimonials_group_id") REFERENCES "components_slices_testimonials_groups" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "core_store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT,
    "value" TEXT,
    "type" TEXT,
    "environment" TEXT,
    "tag" TEXT
);

-- CreateTable
CREATE TABLE "globals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "metaTitleSuffix" TEXT NOT NULL,
    "locale" TEXT,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "globals__localizations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "global_id" INTEGER,
    "related_global_id" INTEGER
);

-- CreateTable
CREATE TABLE "globals_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "global_id" INTEGER NOT NULL,
    CONSTRAINT "globals_components_global_id_fkey" FOREIGN KEY ("global_id") REFERENCES "globals" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "i18n_locales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "code" TEXT,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "lead_form_submissions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "status" TEXT,
    "location" TEXT,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "pages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortName" TEXT,
    "status" TEXT NOT NULL,
    "slug" TEXT,
    "locale" TEXT,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "pages__localizations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "page_id" INTEGER,
    "related_page_id" INTEGER
);

-- CreateTable
CREATE TABLE "pages_components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "field" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" INTEGER NOT NULL,
    "page_id" INTEGER NOT NULL,
    CONSTRAINT "pages_components_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "strapi_administrator" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT,
    "lastname" TEXT,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "resetPasswordToken" TEXT,
    "registrationToken" TEXT,
    "isActive" BOOLEAN,
    "blocked" BOOLEAN,
    "preferedLanguage" TEXT
);

-- CreateTable
CREATE TABLE "strapi_permission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" TEXT NOT NULL,
    "subject" TEXT,
    "properties" TEXT,
    "conditions" TEXT,
    "role" INTEGER,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "strapi_role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "strapi_users_roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER,
    "role_id" INTEGER
);

-- CreateTable
CREATE TABLE "strapi_webhooks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "url" TEXT,
    "headers" TEXT,
    "events" TEXT,
    "enabled" BOOLEAN
);

-- CreateTable
CREATE TABLE "upload_file" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "alternativeText" TEXT,
    "caption" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "formats" TEXT,
    "hash" TEXT NOT NULL,
    "ext" TEXT,
    "mime" TEXT NOT NULL,
    "size" REAL NOT NULL,
    "url" TEXT NOT NULL,
    "previewUrl" TEXT,
    "provider" TEXT NOT NULL,
    "provider_metadata" TEXT,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "upload_file_morph" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "upload_file_id" INTEGER,
    "related_id" INTEGER,
    "related_type" TEXT,
    "field" TEXT,
    "order" INTEGER
);

-- CreateTable
CREATE TABLE "users-permissions_permission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "controller" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "policy" TEXT,
    "role" INTEGER,
    "created_by" INTEGER,
    "updated_by" INTEGER
);

-- CreateTable
CREATE TABLE "users-permissions_role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "created_by" INTEGER,
    "updated_by" INTEGER
);

-- CreateTable
CREATE TABLE "users-permissions_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "provider" TEXT,
    "password" TEXT,
    "resetPasswordToken" TEXT,
    "confirmationToken" TEXT,
    "confirmed" BOOLEAN,
    "blocked" BOOLEAN,
    "role" INTEGER,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "i18n_locales_code_unique" ON "i18n_locales"("code");

-- CreateIndex
CREATE UNIQUE INDEX "strapi_administrator_email_unique" ON "strapi_administrator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "strapi_role_name_unique" ON "strapi_role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "strapi_role_code_unique" ON "strapi_role"("code");

-- CreateIndex
CREATE UNIQUE INDEX "users-permissions_role_type_unique" ON "users-permissions_role"("type");

-- CreateIndex
CREATE UNIQUE INDEX "users-permissions_user_username_unique" ON "users-permissions_user"("username");
