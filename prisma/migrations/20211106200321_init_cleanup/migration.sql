/*
  Warnings:

  - The primary key for the `globals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `globals` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `globals` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `globals` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `globals__localizations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `global_id` on the `globals__localizations` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `globals__localizations` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `related_global_id` on the `globals__localizations` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_layout_footers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_layout_footers` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_layout_navbars_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_layout_navbars_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_layout_navbar_id` on the `components_layout_navbars_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_layout_navbars_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_layout_navbars_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_feature_columns_groups_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_slices_feature_columns_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_slices_feature_columns_group_id` on the `components_slices_feature_columns_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_slices_feature_columns_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_slices_feature_columns_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `pages_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `pages_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `pages_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `pages_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `page_id` on the `pages_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `strapi_administrator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `strapi_administrator` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_feature_columns_groups` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_feature_columns_groups` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_feature_rows_groups_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_slices_feature_rows_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_slices_feature_rows_group_id` on the `components_slices_feature_rows_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_slices_feature_rows_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_slices_feature_rows_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `upload_file` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `upload_file` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `height` on the `upload_file` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `upload_file` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `upload_file` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `width` on the `upload_file` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `upload_file_morph` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `upload_file_morph` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `upload_file_morph` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `related_id` on the `upload_file_morph` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `upload_file_id` on the `upload_file_morph` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `users-permissions_permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `users-permissions_permission` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `users-permissions_permission` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `role` on the `users-permissions_permission` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `users-permissions_permission` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `users-permissions_role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `users-permissions_role` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `users-permissions_role` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `users-permissions_role` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `users-permissions_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `users-permissions_user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `users-permissions_user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `role` on the `users-permissions_user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `users-permissions_user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_elements_plans` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_elements_plans` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_sections_pricings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_sections_pricings` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_feature_rows_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_slices_feature_rows_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_slices_feature_row_id` on the `components_slices_feature_rows_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_slices_feature_rows_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_slices_feature_rows_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_heroes_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_slices_heroes_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_slices_hero_id` on the `components_slices_heroes_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_slices_heroes_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_slices_heroes_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `strapi_permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `strapi_permission` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `role` on the `strapi_permission` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `strapi_webhooks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `strapi_webhooks` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_links_footer_sections_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_links_footer_sections_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_links_footer_section_id` on the `components_links_footer_sections_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_links_footer_sections_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_links_footer_sections_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_sections_lead_forms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_sections_lead_forms` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_bottom_actions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_bottom_actions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_sections_rich_texts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_sections_rich_texts` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_links_footer_sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_links_footer_sections` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_links_links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_links_links` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_elements_notification_banners` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_elements_notification_banners` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_elements_logos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_elements_logos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `pages__localizations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `pages__localizations` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `page_id` on the `pages__localizations` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `related_page_id` on the `pages__localizations` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `strapi_users_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `strapi_users_roles` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `role_id` on the `strapi_users_roles` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `user_id` on the `strapi_users_roles` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_bottom_actions_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_slices_bottom_actions_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_slices_bottom_action_id` on the `components_slices_bottom_actions_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_slices_bottom_actions_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_slices_bottom_actions_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_layout_footers_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_layout_footers_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_layout_footer_id` on the `components_layout_footers_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_layout_footers_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_layout_footers_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_sections_lead_forms_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_sections_lead_forms_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_sections_lead_form_id` on the `components_sections_lead_forms_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_sections_lead_forms_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_sections_lead_forms_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_feature_rows_groups` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_feature_rows_groups` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_large_videos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_large_videos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `i18n_locales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `i18n_locales` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `i18n_locales` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `i18n_locales` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_links_simple_buttons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_links_simple_buttons` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_testimonials_groups` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_testimonials_groups` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `globals_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `globals_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `global_id` on the `globals_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `globals_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `globals_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `strapi_role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `strapi_role` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `pages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `pages` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `pages` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `pages` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `lead_form_submissions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `created_by` on the `lead_form_submissions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `lead_form_submissions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `updated_by` on the `lead_form_submissions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_feature_rows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_feature_rows` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_elements_features` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_elements_features` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_elements_plans_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_elements_plans_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_elements_plan_id` on the `components_elements_plans_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_elements_plans_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_elements_plans_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_layout_navbars` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_layout_navbars` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_links_buttons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_links_buttons` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_meta_metadata` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_meta_metadata` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_sections_pricings_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_sections_pricings_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_sections_pricing_id` on the `components_sections_pricings_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_sections_pricings_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_sections_pricings_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_feature_columns` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_feature_columns` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_testimonials` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_testimonials` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_heroes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components_slices_heroes` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `components_slices_testimonials_groups_components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `component_id` on the `components_slices_testimonials_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `components_slices_testimonials_group_id` on the `components_slices_testimonials_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `id` on the `components_slices_testimonials_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `order` on the `components_slices_testimonials_groups_components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `core_store` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `core_store` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_globals" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "metaTitleSuffix" TEXT NOT NULL,
    "locale" TEXT,
    "created_by" BIGINT,
    "updated_by" BIGINT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_globals" ("created_at", "created_by", "id", "locale", "metaTitleSuffix", "updated_at", "updated_by") SELECT "created_at", "created_by", "id", "locale", "metaTitleSuffix", "updated_at", "updated_by" FROM "globals";
DROP TABLE "globals";
ALTER TABLE "new_globals" RENAME TO "globals";
CREATE TABLE "new_globals__localizations" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "global_id" BIGINT,
    "related_global_id" BIGINT
);
INSERT INTO "new_globals__localizations" ("global_id", "id", "related_global_id") SELECT "global_id", "id", "related_global_id" FROM "globals__localizations";
DROP TABLE "globals__localizations";
ALTER TABLE "new_globals__localizations" RENAME TO "globals__localizations";
CREATE TABLE "new_components_layout_footers" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "smallText" TEXT
);
INSERT INTO "new_components_layout_footers" ("id", "smallText") SELECT "id", "smallText" FROM "components_layout_footers";
DROP TABLE "components_layout_footers";
ALTER TABLE "new_components_layout_footers" RENAME TO "components_layout_footers";
CREATE TABLE "new_components_layout_navbars_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_layout_navbar_id" BIGINT NOT NULL,
    CONSTRAINT "components_layout_navbars_components_components_layout_navbar_id_fkey" FOREIGN KEY ("components_layout_navbar_id") REFERENCES "components_layout_navbars" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_layout_navbars_components" ("component_id", "component_type", "components_layout_navbar_id", "field", "id", "order") SELECT "component_id", "component_type", "components_layout_navbar_id", "field", "id", "order" FROM "components_layout_navbars_components";
DROP TABLE "components_layout_navbars_components";
ALTER TABLE "new_components_layout_navbars_components" RENAME TO "components_layout_navbars_components";
CREATE TABLE "new_components_slices_feature_columns_groups_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_slices_feature_columns_group_id" BIGINT NOT NULL,
    CONSTRAINT "components_slices_feature_columns_groups_components_components_slices_feature_columns_group_id_fkey" FOREIGN KEY ("components_slices_feature_columns_group_id") REFERENCES "components_slices_feature_columns_groups" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_slices_feature_columns_groups_components" ("component_id", "component_type", "components_slices_feature_columns_group_id", "field", "id", "order") SELECT "component_id", "component_type", "components_slices_feature_columns_group_id", "field", "id", "order" FROM "components_slices_feature_columns_groups_components";
DROP TABLE "components_slices_feature_columns_groups_components";
ALTER TABLE "new_components_slices_feature_columns_groups_components" RENAME TO "components_slices_feature_columns_groups_components";
CREATE TABLE "new_pages_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "page_id" BIGINT NOT NULL,
    CONSTRAINT "pages_components_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_pages_components" ("component_id", "component_type", "field", "id", "order", "page_id") SELECT "component_id", "component_type", "field", "id", "order", "page_id" FROM "pages_components";
DROP TABLE "pages_components";
ALTER TABLE "new_pages_components" RENAME TO "pages_components";
CREATE TABLE "new_strapi_administrator" (
    "id" BIGINT NOT NULL PRIMARY KEY,
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
INSERT INTO "new_strapi_administrator" ("blocked", "email", "firstname", "id", "isActive", "lastname", "password", "preferedLanguage", "registrationToken", "resetPasswordToken", "username") SELECT "blocked", "email", "firstname", "id", "isActive", "lastname", "password", "preferedLanguage", "registrationToken", "resetPasswordToken", "username" FROM "strapi_administrator";
DROP TABLE "strapi_administrator";
ALTER TABLE "new_strapi_administrator" RENAME TO "strapi_administrator";
CREATE UNIQUE INDEX "strapi_administrator_email_unique" ON "strapi_administrator"("email");
CREATE TABLE "new_components_slices_feature_columns_groups" (
    "id" BIGINT NOT NULL PRIMARY KEY
);
INSERT INTO "new_components_slices_feature_columns_groups" ("id") SELECT "id" FROM "components_slices_feature_columns_groups";
DROP TABLE "components_slices_feature_columns_groups";
ALTER TABLE "new_components_slices_feature_columns_groups" RENAME TO "components_slices_feature_columns_groups";
CREATE TABLE "new_components_slices_feature_rows_groups_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_slices_feature_rows_group_id" BIGINT NOT NULL,
    CONSTRAINT "components_slices_feature_rows_groups_components_components_slices_feature_rows_group_id_fkey" FOREIGN KEY ("components_slices_feature_rows_group_id") REFERENCES "components_slices_feature_rows_groups" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_slices_feature_rows_groups_components" ("component_id", "component_type", "components_slices_feature_rows_group_id", "field", "id", "order") SELECT "component_id", "component_type", "components_slices_feature_rows_group_id", "field", "id", "order" FROM "components_slices_feature_rows_groups_components";
DROP TABLE "components_slices_feature_rows_groups_components";
ALTER TABLE "new_components_slices_feature_rows_groups_components" RENAME TO "components_slices_feature_rows_groups_components";
CREATE TABLE "new_upload_file" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "alternativeText" TEXT,
    "caption" TEXT,
    "width" BIGINT,
    "height" BIGINT,
    "formats" TEXT,
    "hash" TEXT NOT NULL,
    "ext" TEXT,
    "mime" TEXT NOT NULL,
    "size" REAL NOT NULL,
    "url" TEXT NOT NULL,
    "previewUrl" TEXT,
    "provider" TEXT NOT NULL,
    "provider_metadata" TEXT,
    "created_by" BIGINT,
    "updated_by" BIGINT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_upload_file" ("alternativeText", "caption", "created_at", "created_by", "ext", "formats", "hash", "height", "id", "mime", "name", "previewUrl", "provider", "provider_metadata", "size", "updated_at", "updated_by", "url", "width") SELECT "alternativeText", "caption", "created_at", "created_by", "ext", "formats", "hash", "height", "id", "mime", "name", "previewUrl", "provider", "provider_metadata", "size", "updated_at", "updated_by", "url", "width" FROM "upload_file";
DROP TABLE "upload_file";
ALTER TABLE "new_upload_file" RENAME TO "upload_file";
CREATE TABLE "new_upload_file_morph" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "upload_file_id" BIGINT,
    "related_id" BIGINT,
    "related_type" TEXT,
    "field" TEXT,
    "order" BIGINT
);
INSERT INTO "new_upload_file_morph" ("field", "id", "order", "related_id", "related_type", "upload_file_id") SELECT "field", "id", "order", "related_id", "related_type", "upload_file_id" FROM "upload_file_morph";
DROP TABLE "upload_file_morph";
ALTER TABLE "new_upload_file_morph" RENAME TO "upload_file_morph";
CREATE TABLE "new_users-permissions_permission" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "controller" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "policy" TEXT,
    "role" BIGINT,
    "created_by" BIGINT,
    "updated_by" BIGINT
);
INSERT INTO "new_users-permissions_permission" ("action", "controller", "created_by", "enabled", "id", "policy", "role", "type", "updated_by") SELECT "action", "controller", "created_by", "enabled", "id", "policy", "role", "type", "updated_by" FROM "users-permissions_permission";
DROP TABLE "users-permissions_permission";
ALTER TABLE "new_users-permissions_permission" RENAME TO "users-permissions_permission";
CREATE TABLE "new_users-permissions_role" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "created_by" BIGINT,
    "updated_by" BIGINT
);
INSERT INTO "new_users-permissions_role" ("created_by", "description", "id", "name", "type", "updated_by") SELECT "created_by", "description", "id", "name", "type", "updated_by" FROM "users-permissions_role";
DROP TABLE "users-permissions_role";
ALTER TABLE "new_users-permissions_role" RENAME TO "users-permissions_role";
CREATE UNIQUE INDEX "users-permissions_role_type_unique" ON "users-permissions_role"("type");
CREATE TABLE "new_users-permissions_user" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "provider" TEXT,
    "password" TEXT,
    "resetPasswordToken" TEXT,
    "confirmationToken" TEXT,
    "confirmed" BOOLEAN,
    "blocked" BOOLEAN,
    "role" BIGINT,
    "created_by" BIGINT,
    "updated_by" BIGINT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users-permissions_user" ("blocked", "confirmationToken", "confirmed", "created_at", "created_by", "email", "id", "password", "provider", "resetPasswordToken", "role", "updated_at", "updated_by", "username") SELECT "blocked", "confirmationToken", "confirmed", "created_at", "created_by", "email", "id", "password", "provider", "resetPasswordToken", "role", "updated_at", "updated_by", "username" FROM "users-permissions_user";
DROP TABLE "users-permissions_user";
ALTER TABLE "new_users-permissions_user" RENAME TO "users-permissions_user";
CREATE UNIQUE INDEX "users-permissions_user_username_unique" ON "users-permissions_user"("username");
CREATE TABLE "new_components_elements_plans" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "description" TEXT,
    "isRecommended" BOOLEAN,
    "price" REAL,
    "pricePeriod" TEXT
);
INSERT INTO "new_components_elements_plans" ("description", "id", "isRecommended", "name", "price", "pricePeriod") SELECT "description", "id", "isRecommended", "name", "price", "pricePeriod" FROM "components_elements_plans";
DROP TABLE "components_elements_plans";
ALTER TABLE "new_components_elements_plans" RENAME TO "components_elements_plans";
CREATE TABLE "new_components_sections_pricings" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT
);
INSERT INTO "new_components_sections_pricings" ("id", "title") SELECT "id", "title" FROM "components_sections_pricings";
DROP TABLE "components_sections_pricings";
ALTER TABLE "new_components_sections_pricings" RENAME TO "components_sections_pricings";
CREATE TABLE "new_components_slices_feature_rows_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_slices_feature_row_id" BIGINT NOT NULL,
    CONSTRAINT "components_slices_feature_rows_components_components_slices_feature_row_id_fkey" FOREIGN KEY ("components_slices_feature_row_id") REFERENCES "components_slices_feature_rows" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_slices_feature_rows_components" ("component_id", "component_type", "components_slices_feature_row_id", "field", "id", "order") SELECT "component_id", "component_type", "components_slices_feature_row_id", "field", "id", "order" FROM "components_slices_feature_rows_components";
DROP TABLE "components_slices_feature_rows_components";
ALTER TABLE "new_components_slices_feature_rows_components" RENAME TO "components_slices_feature_rows_components";
CREATE TABLE "new_components_slices_heroes_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_slices_hero_id" BIGINT NOT NULL,
    CONSTRAINT "components_slices_heroes_components_components_slices_hero_id_fkey" FOREIGN KEY ("components_slices_hero_id") REFERENCES "components_slices_heroes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_slices_heroes_components" ("component_id", "component_type", "components_slices_hero_id", "field", "id", "order") SELECT "component_id", "component_type", "components_slices_hero_id", "field", "id", "order" FROM "components_slices_heroes_components";
DROP TABLE "components_slices_heroes_components";
ALTER TABLE "new_components_slices_heroes_components" RENAME TO "components_slices_heroes_components";
CREATE TABLE "new_strapi_permission" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "action" TEXT NOT NULL,
    "subject" TEXT,
    "properties" TEXT,
    "conditions" TEXT,
    "role" BIGINT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_strapi_permission" ("action", "conditions", "created_at", "id", "properties", "role", "subject", "updated_at") SELECT "action", "conditions", "created_at", "id", "properties", "role", "subject", "updated_at" FROM "strapi_permission";
DROP TABLE "strapi_permission";
ALTER TABLE "new_strapi_permission" RENAME TO "strapi_permission";
CREATE TABLE "new_strapi_webhooks" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "url" TEXT,
    "headers" TEXT,
    "events" TEXT,
    "enabled" BOOLEAN
);
INSERT INTO "new_strapi_webhooks" ("enabled", "events", "headers", "id", "name", "url") SELECT "enabled", "events", "headers", "id", "name", "url" FROM "strapi_webhooks";
DROP TABLE "strapi_webhooks";
ALTER TABLE "new_strapi_webhooks" RENAME TO "strapi_webhooks";
CREATE TABLE "new_components_links_footer_sections_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_links_footer_section_id" BIGINT NOT NULL,
    CONSTRAINT "components_links_footer_sections_components_components_links_footer_section_id_fkey" FOREIGN KEY ("components_links_footer_section_id") REFERENCES "components_links_footer_sections" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_links_footer_sections_components" ("component_id", "component_type", "components_links_footer_section_id", "field", "id", "order") SELECT "component_id", "component_type", "components_links_footer_section_id", "field", "id", "order" FROM "components_links_footer_sections_components";
DROP TABLE "components_links_footer_sections_components";
ALTER TABLE "new_components_links_footer_sections_components" RENAME TO "components_links_footer_sections_components";
CREATE TABLE "new_components_sections_lead_forms" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "emailPlaceholder" TEXT,
    "location" TEXT
);
INSERT INTO "new_components_sections_lead_forms" ("emailPlaceholder", "id", "location", "title") SELECT "emailPlaceholder", "id", "location", "title" FROM "components_sections_lead_forms";
DROP TABLE "components_sections_lead_forms";
ALTER TABLE "new_components_sections_lead_forms" RENAME TO "components_sections_lead_forms";
CREATE TABLE "new_components_slices_bottom_actions" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT
);
INSERT INTO "new_components_slices_bottom_actions" ("id", "title") SELECT "id", "title" FROM "components_slices_bottom_actions";
DROP TABLE "components_slices_bottom_actions";
ALTER TABLE "new_components_slices_bottom_actions" RENAME TO "components_slices_bottom_actions";
CREATE TABLE "new_components_sections_rich_texts" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "content" TEXT
);
INSERT INTO "new_components_sections_rich_texts" ("content", "id") SELECT "content", "id" FROM "components_sections_rich_texts";
DROP TABLE "components_sections_rich_texts";
ALTER TABLE "new_components_sections_rich_texts" RENAME TO "components_sections_rich_texts";
CREATE TABLE "new_components_links_footer_sections" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT
);
INSERT INTO "new_components_links_footer_sections" ("id", "title") SELECT "id", "title" FROM "components_links_footer_sections";
DROP TABLE "components_links_footer_sections";
ALTER TABLE "new_components_links_footer_sections" RENAME TO "components_links_footer_sections";
CREATE TABLE "new_components_links_links" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "url" TEXT,
    "newTab" BOOLEAN,
    "text" TEXT
);
INSERT INTO "new_components_links_links" ("id", "newTab", "text", "url") SELECT "id", "newTab", "text", "url" FROM "components_links_links";
DROP TABLE "components_links_links";
ALTER TABLE "new_components_links_links" RENAME TO "components_links_links";
CREATE TABLE "new_components_elements_notification_banners" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "text" TEXT,
    "type" TEXT
);
INSERT INTO "new_components_elements_notification_banners" ("id", "text", "type") SELECT "id", "text", "type" FROM "components_elements_notification_banners";
DROP TABLE "components_elements_notification_banners";
ALTER TABLE "new_components_elements_notification_banners" RENAME TO "components_elements_notification_banners";
CREATE TABLE "new_components_elements_logos" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT
);
INSERT INTO "new_components_elements_logos" ("id", "title") SELECT "id", "title" FROM "components_elements_logos";
DROP TABLE "components_elements_logos";
ALTER TABLE "new_components_elements_logos" RENAME TO "components_elements_logos";
CREATE TABLE "new_pages__localizations" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "page_id" BIGINT,
    "related_page_id" BIGINT
);
INSERT INTO "new_pages__localizations" ("id", "page_id", "related_page_id") SELECT "id", "page_id", "related_page_id" FROM "pages__localizations";
DROP TABLE "pages__localizations";
ALTER TABLE "new_pages__localizations" RENAME TO "pages__localizations";
CREATE TABLE "new_strapi_users_roles" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "user_id" BIGINT,
    "role_id" BIGINT
);
INSERT INTO "new_strapi_users_roles" ("id", "role_id", "user_id") SELECT "id", "role_id", "user_id" FROM "strapi_users_roles";
DROP TABLE "strapi_users_roles";
ALTER TABLE "new_strapi_users_roles" RENAME TO "strapi_users_roles";
CREATE TABLE "new_components_slices_bottom_actions_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_slices_bottom_action_id" BIGINT NOT NULL,
    CONSTRAINT "components_slices_bottom_actions_components_components_slices_bottom_action_id_fkey" FOREIGN KEY ("components_slices_bottom_action_id") REFERENCES "components_slices_bottom_actions" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_slices_bottom_actions_components" ("component_id", "component_type", "components_slices_bottom_action_id", "field", "id", "order") SELECT "component_id", "component_type", "components_slices_bottom_action_id", "field", "id", "order" FROM "components_slices_bottom_actions_components";
DROP TABLE "components_slices_bottom_actions_components";
ALTER TABLE "new_components_slices_bottom_actions_components" RENAME TO "components_slices_bottom_actions_components";
CREATE TABLE "new_components_layout_footers_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_layout_footer_id" BIGINT NOT NULL,
    CONSTRAINT "components_layout_footers_components_components_layout_footer_id_fkey" FOREIGN KEY ("components_layout_footer_id") REFERENCES "components_layout_footers" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_layout_footers_components" ("component_id", "component_type", "components_layout_footer_id", "field", "id", "order") SELECT "component_id", "component_type", "components_layout_footer_id", "field", "id", "order" FROM "components_layout_footers_components";
DROP TABLE "components_layout_footers_components";
ALTER TABLE "new_components_layout_footers_components" RENAME TO "components_layout_footers_components";
CREATE TABLE "new_components_sections_lead_forms_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_sections_lead_form_id" BIGINT NOT NULL,
    CONSTRAINT "components_sections_lead_forms_components_components_sections_lead_form_id_fkey" FOREIGN KEY ("components_sections_lead_form_id") REFERENCES "components_sections_lead_forms" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_sections_lead_forms_components" ("component_id", "component_type", "components_sections_lead_form_id", "field", "id", "order") SELECT "component_id", "component_type", "components_sections_lead_form_id", "field", "id", "order" FROM "components_sections_lead_forms_components";
DROP TABLE "components_sections_lead_forms_components";
ALTER TABLE "new_components_sections_lead_forms_components" RENAME TO "components_sections_lead_forms_components";
CREATE TABLE "new_components_slices_feature_rows_groups" (
    "id" BIGINT NOT NULL PRIMARY KEY
);
INSERT INTO "new_components_slices_feature_rows_groups" ("id") SELECT "id" FROM "components_slices_feature_rows_groups";
DROP TABLE "components_slices_feature_rows_groups";
ALTER TABLE "new_components_slices_feature_rows_groups" RENAME TO "components_slices_feature_rows_groups";
CREATE TABLE "new_components_slices_large_videos" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "description" TEXT
);
INSERT INTO "new_components_slices_large_videos" ("description", "id", "title") SELECT "description", "id", "title" FROM "components_slices_large_videos";
DROP TABLE "components_slices_large_videos";
ALTER TABLE "new_components_slices_large_videos" RENAME TO "components_slices_large_videos";
CREATE TABLE "new_i18n_locales" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "code" TEXT,
    "created_by" BIGINT,
    "updated_by" BIGINT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_i18n_locales" ("code", "created_at", "created_by", "id", "name", "updated_at", "updated_by") SELECT "code", "created_at", "created_by", "id", "name", "updated_at", "updated_by" FROM "i18n_locales";
DROP TABLE "i18n_locales";
ALTER TABLE "new_i18n_locales" RENAME TO "i18n_locales";
CREATE UNIQUE INDEX "i18n_locales_code_unique" ON "i18n_locales"("code");
CREATE TABLE "new_components_links_simple_buttons" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "text" TEXT,
    "type" TEXT
);
INSERT INTO "new_components_links_simple_buttons" ("id", "text", "type") SELECT "id", "text", "type" FROM "components_links_simple_buttons";
DROP TABLE "components_links_simple_buttons";
ALTER TABLE "new_components_links_simple_buttons" RENAME TO "components_links_simple_buttons";
CREATE TABLE "new_components_slices_testimonials_groups" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "description" TEXT
);
INSERT INTO "new_components_slices_testimonials_groups" ("description", "id", "title") SELECT "description", "id", "title" FROM "components_slices_testimonials_groups";
DROP TABLE "components_slices_testimonials_groups";
ALTER TABLE "new_components_slices_testimonials_groups" RENAME TO "components_slices_testimonials_groups";
CREATE TABLE "new_globals_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "global_id" BIGINT NOT NULL,
    CONSTRAINT "globals_components_global_id_fkey" FOREIGN KEY ("global_id") REFERENCES "globals" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_globals_components" ("component_id", "component_type", "field", "global_id", "id", "order") SELECT "component_id", "component_type", "field", "global_id", "id", "order" FROM "globals_components";
DROP TABLE "globals_components";
ALTER TABLE "new_globals_components" RENAME TO "globals_components";
CREATE TABLE "new_strapi_role" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_strapi_role" ("code", "created_at", "description", "id", "name", "updated_at") SELECT "code", "created_at", "description", "id", "name", "updated_at" FROM "strapi_role";
DROP TABLE "strapi_role";
ALTER TABLE "new_strapi_role" RENAME TO "strapi_role";
CREATE UNIQUE INDEX "strapi_role_name_unique" ON "strapi_role"("name");
CREATE UNIQUE INDEX "strapi_role_code_unique" ON "strapi_role"("code");
CREATE TABLE "new_pages" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "shortName" TEXT,
    "status" TEXT NOT NULL,
    "slug" TEXT,
    "locale" TEXT,
    "created_by" BIGINT,
    "updated_by" BIGINT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_pages" ("created_at", "created_by", "id", "locale", "shortName", "slug", "status", "updated_at", "updated_by") SELECT "created_at", "created_by", "id", "locale", "shortName", "slug", "status", "updated_at", "updated_by" FROM "pages";
DROP TABLE "pages";
ALTER TABLE "new_pages" RENAME TO "pages";
CREATE TABLE "new_lead_form_submissions" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "status" TEXT,
    "location" TEXT,
    "created_by" BIGINT,
    "updated_by" BIGINT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_lead_form_submissions" ("created_at", "created_by", "email", "id", "location", "status", "updated_at", "updated_by") SELECT "created_at", "created_by", "email", "id", "location", "status", "updated_at", "updated_by" FROM "lead_form_submissions";
DROP TABLE "lead_form_submissions";
ALTER TABLE "new_lead_form_submissions" RENAME TO "lead_form_submissions";
CREATE TABLE "new_components_slices_feature_rows" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "description" TEXT
);
INSERT INTO "new_components_slices_feature_rows" ("description", "id", "title") SELECT "description", "id", "title" FROM "components_slices_feature_rows";
DROP TABLE "components_slices_feature_rows";
ALTER TABLE "new_components_slices_feature_rows" RENAME TO "components_slices_feature_rows";
CREATE TABLE "new_components_elements_features" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT
);
INSERT INTO "new_components_elements_features" ("id", "name") SELECT "id", "name" FROM "components_elements_features";
DROP TABLE "components_elements_features";
ALTER TABLE "new_components_elements_features" RENAME TO "components_elements_features";
CREATE TABLE "new_components_elements_plans_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_elements_plan_id" BIGINT NOT NULL,
    CONSTRAINT "components_elements_plans_components_components_elements_plan_id_fkey" FOREIGN KEY ("components_elements_plan_id") REFERENCES "components_elements_plans" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_elements_plans_components" ("component_id", "component_type", "components_elements_plan_id", "field", "id", "order") SELECT "component_id", "component_type", "components_elements_plan_id", "field", "id", "order" FROM "components_elements_plans_components";
DROP TABLE "components_elements_plans_components";
ALTER TABLE "new_components_elements_plans_components" RENAME TO "components_elements_plans_components";
CREATE TABLE "new_components_layout_navbars" (
    "id" BIGINT NOT NULL PRIMARY KEY
);
INSERT INTO "new_components_layout_navbars" ("id") SELECT "id" FROM "components_layout_navbars";
DROP TABLE "components_layout_navbars";
ALTER TABLE "new_components_layout_navbars" RENAME TO "components_layout_navbars";
CREATE TABLE "new_components_links_buttons" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "url" TEXT,
    "newTab" BOOLEAN,
    "text" TEXT,
    "type" TEXT
);
INSERT INTO "new_components_links_buttons" ("id", "newTab", "text", "type", "url") SELECT "id", "newTab", "text", "type", "url" FROM "components_links_buttons";
DROP TABLE "components_links_buttons";
ALTER TABLE "new_components_links_buttons" RENAME TO "components_links_buttons";
CREATE TABLE "new_components_meta_metadata" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "twitterCardType" TEXT,
    "twitterUsername" TEXT
);
INSERT INTO "new_components_meta_metadata" ("id", "metaDescription", "metaTitle", "twitterCardType", "twitterUsername") SELECT "id", "metaDescription", "metaTitle", "twitterCardType", "twitterUsername" FROM "components_meta_metadata";
DROP TABLE "components_meta_metadata";
ALTER TABLE "new_components_meta_metadata" RENAME TO "components_meta_metadata";
CREATE TABLE "new_components_sections_pricings_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_sections_pricing_id" BIGINT NOT NULL,
    CONSTRAINT "components_sections_pricings_components_components_sections_pricing_id_fkey" FOREIGN KEY ("components_sections_pricing_id") REFERENCES "components_sections_pricings" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_sections_pricings_components" ("component_id", "component_type", "components_sections_pricing_id", "field", "id", "order") SELECT "component_id", "component_type", "components_sections_pricing_id", "field", "id", "order" FROM "components_sections_pricings_components";
DROP TABLE "components_sections_pricings_components";
ALTER TABLE "new_components_sections_pricings_components" RENAME TO "components_sections_pricings_components";
CREATE TABLE "new_components_slices_feature_columns" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "description" TEXT
);
INSERT INTO "new_components_slices_feature_columns" ("description", "id", "title") SELECT "description", "id", "title" FROM "components_slices_feature_columns";
DROP TABLE "components_slices_feature_columns";
ALTER TABLE "new_components_slices_feature_columns" RENAME TO "components_slices_feature_columns";
CREATE TABLE "new_components_slices_testimonials" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "text" TEXT,
    "authorName" TEXT,
    "authorTitle" TEXT,
    "link" TEXT
);
INSERT INTO "new_components_slices_testimonials" ("authorName", "authorTitle", "id", "link", "text") SELECT "authorName", "authorTitle", "id", "link", "text" FROM "components_slices_testimonials";
DROP TABLE "components_slices_testimonials";
ALTER TABLE "new_components_slices_testimonials" RENAME TO "components_slices_testimonials";
CREATE TABLE "new_components_slices_heroes" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "label" TEXT,
    "description" TEXT,
    "smallTextWithLink" TEXT
);
INSERT INTO "new_components_slices_heroes" ("description", "id", "label", "smallTextWithLink", "title") SELECT "description", "id", "label", "smallTextWithLink", "title" FROM "components_slices_heroes";
DROP TABLE "components_slices_heroes";
ALTER TABLE "new_components_slices_heroes" RENAME TO "components_slices_heroes";
CREATE TABLE "new_components_slices_testimonials_groups_components" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "component_type" TEXT NOT NULL,
    "component_id" BIGINT NOT NULL,
    "components_slices_testimonials_group_id" BIGINT NOT NULL,
    CONSTRAINT "components_slices_testimonials_groups_components_components_slices_testimonials_group_id_fkey" FOREIGN KEY ("components_slices_testimonials_group_id") REFERENCES "components_slices_testimonials_groups" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);
INSERT INTO "new_components_slices_testimonials_groups_components" ("component_id", "component_type", "components_slices_testimonials_group_id", "field", "id", "order") SELECT "component_id", "component_type", "components_slices_testimonials_group_id", "field", "id", "order" FROM "components_slices_testimonials_groups_components";
DROP TABLE "components_slices_testimonials_groups_components";
ALTER TABLE "new_components_slices_testimonials_groups_components" RENAME TO "components_slices_testimonials_groups_components";
CREATE TABLE "new_core_store" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "key" TEXT,
    "value" TEXT,
    "type" TEXT,
    "environment" TEXT,
    "tag" TEXT
);
INSERT INTO "new_core_store" ("environment", "id", "key", "tag", "type", "value") SELECT "environment", "id", "key", "tag", "type", "value" FROM "core_store";
DROP TABLE "core_store";
ALTER TABLE "new_core_store" RENAME TO "core_store";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
