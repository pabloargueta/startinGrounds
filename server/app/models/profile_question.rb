class ProfileQuestion < ApplicationRecord
    has_many :profile_answers
    has_many :answer_options
    def type
        self.question_type
    end
end
