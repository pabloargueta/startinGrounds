class Preference < ApplicationRecord
  belongs_to :user
  belongs_to :profile_question
  belongs_to :answer_option
  alias :selection, :answer_option

  def difference(answer)
    case answer.profile_question.type
    when "categorical"
      if answer.selection.value == self.selection.value
        value = 1
      else
        value = -1
      end
    when "ordinal"
      value = answ
    when "textual"
    when "datetime"
    end
    value
  end

end
