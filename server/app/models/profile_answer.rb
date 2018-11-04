class ProfileAnswer < ApplicationRecord
    belongs_to :profile_question
    belongs_to :answer_option, optional: true
    belongs_to :user

    def selection
        self.answer_option
    end
end
