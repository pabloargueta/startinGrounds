class User < ApplicationRecord
    include Rails.application.routes.url_helpers

    has_many :profile_answers
    has_many :preferences

    has_secure_password
    validates :username, uniqueness: {case_sensitive: false}

    has_one_attached :avatar
    has_many_attached :images

    accepts_nested_attributes_for :profile_answers
    accepts_nested_attributes_for :preferences

    before_create do | user |
        ProfileQuestion.all.each do | question |
            user.preferences.new({
                profile_question: question,
                importance: 1
            })
        end

        ProfileQuestion.all.each do | question |
            user.profile_answers.new({
                profile_question: question
            })
        end
    end

    def avatar_url
        url_for(self.avatar)
    end

    def matches
        matches = other_users.map do | user |
            {
                score: self.match_score_for(user),
                user: user
            }
        end
        sorted = matches.sort_by do | match |
            match[:score]
        end
        sorted.map do | match |
            match[:user]
        end.reverse
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

    def other_users
        User.where(' id != ?', self.id)
    end

end
