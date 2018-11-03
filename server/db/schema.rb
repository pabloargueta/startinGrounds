# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_03_212613) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "answer_options", force: :cascade do |t|
    t.string "wording"
    t.bigint "profile_question_id"
    t.float "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_question_id"], name: "index_answer_options_on_profile_question_id"
  end

  create_table "preferences", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "profile_question_id"
    t.bigint "answer_option_id"
    t.float "importance"
    t.string "wording"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_option_id"], name: "index_preferences_on_answer_option_id"
    t.index ["profile_question_id"], name: "index_preferences_on_profile_question_id"
    t.index ["user_id"], name: "index_preferences_on_user_id"
  end

  create_table "profile_answers", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "profile_question_id"
    t.bigint "answer_option_id"
    t.string "wording"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_option_id"], name: "index_profile_answers_on_answer_option_id"
    t.index ["profile_question_id"], name: "index_profile_answers_on_profile_question_id"
    t.index ["user_id"], name: "index_profile_answers_on_user_id"
  end

  create_table "profile_questions", force: :cascade do |t|
    t.string "wording"
    t.string "question_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "billing_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "preferences", "profile_questions"
  add_foreign_key "preferences", "users"
end
