class ProfileQuestion < ApplicationRecord
    has_many :profile_answers
    has_many :answer_options
    alias :type, :question_type
end
