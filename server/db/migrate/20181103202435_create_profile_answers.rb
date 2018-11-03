class CreateProfileAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_answers do |t|
      t.belongs_to :user
      t.belongs_to :profile_question
      t.belongs_to :answer_option
      t.string :wording
      t.timestamps
    end
  end
end
