class User < ApplicationRecord
    has_many :profile_items
    has_many :preferences

    has_secure_password
    validates :username, uniqueness: {case_sensitive: false}

    has_one_attached :avatar
    has_many_attached :images

    def matches
        matches = User.all.map do | user |
            {
                score: self.match_score_for(user),
                user: user
            }
        end
        sorted = matches.sort_by do | match |
            match[:match_score]
        end
        sorted.map(&:user)
    end

    def match_score_for(user)
        match_score = 0
        user.profile_answers.each do | answer |
            preference = self.preferences.find do | preference |
                preference.profile_question == answer.profile_question
            end
            match_score += preference.difference(answer)
        end
        match_score
    end

end
