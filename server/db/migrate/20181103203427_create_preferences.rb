class CreatePreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :preferences do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :profile_question, foreign_key: true
      t.belongs_to :answer_option
      t.float :importance
      t.string :wording
      t.timestamps
    end
  end
end
