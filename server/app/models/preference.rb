class Preference < ApplicationRecord
  belongs_to :user
  belongs_to :profile_question
  belongs_to :answer_option, optional: true

  def selection
    self.answer_option
  end

  def difference(answer)
    value = 0
    case answer.profile_question.type
    when "categorical"
      if answer.selection.value == self.selection.value
        value = 1
      else
        value = -1
      end
    when "ordinal"
      value = answer.selection.value - self.selection.value
      value = value ? -value : value
    when "textual"
      value = 0
    when "datetime"
      value = 0 # Add date logic here
    end
    value * self.importance
  end

end
