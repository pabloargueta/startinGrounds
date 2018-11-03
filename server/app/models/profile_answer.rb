class ProfileAnswer < ApplicationRecord
    belongs_to :profile_question
    belongs_to :answer_option
    belongs_to :user
    alias :selection, :answer_option

end
