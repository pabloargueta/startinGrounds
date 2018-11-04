class CreateProfileQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_questions do |t|
      t.string :profile_wording
      t.string :preference_wording
      t.string :question_type
      t.boolean :editable
      t.timestamps
    end
  end
end
