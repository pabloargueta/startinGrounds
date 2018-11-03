class CreateAnswerOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_options do |t|
      t.string :wording
      t.belongs_to :profile_question
      t.float :value
      t.timestamps
    end
  end
end
