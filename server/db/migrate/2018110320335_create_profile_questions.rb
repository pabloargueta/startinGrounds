class CreateProfileQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_questions do |t|
      t.string :wording
      t.string :question_type

      t.timestamps
    end
  end
end
