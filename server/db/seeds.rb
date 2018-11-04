# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ProfileAnswer.destroy_all
Preference.destroy_all
AnswerOption.destroy_all
User.destroy_all
ProfileQuestion.destroy_all

data =[
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "I am a:",
      "AnswerOption": "woman\nman",
      "Preference.wording": "I am seeking a :"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "integer",
      "ProfileQuestion.wording": "I am ___ years old.",
      "AnswerOption": "",
      "Preference.wording": "Ideally, the median age of someone I am seeking would be ___ years old (give or take 3 years)."
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "I am currently:",
      "AnswerOption": "single \nmarried \ndivorced \nwidow(er)ed",
      "Preference.wording": "I am looking for people who are:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "I am:",
      "AnswerOption": "monogamous \nnot monogamous",
      "Preference.wording": "I am looking for people who are:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "Regarding children at status quo, I:",
      "AnswerOption": "have children\ndo not have children",
      "Preference.wording": "I am looking for people who:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "Regarding children in the future, I:",
      "AnswerOption": "want children \ndo not want children",
      "Preference.wording": "I am looking for people who:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "Regarding cats, I:",
      "AnswerOption": "do not have cats and don't want cats \ndo not have cats but don't mind them\ndo not have cats but like them\nhave cats",
      "Preference.wording": "I am looking for people who:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "Regarding dogs, I:",
      "AnswerOption": "do not have dogs and don't want dogs \ndo not have dogs but don't mind them\ndo not have dogs but like them\nhave dogs",
      "Preference.wording": "I am looking for people who:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "My education spans:",
      "AnswerOption": "High school\nSome college\nA technical bootcamp (e.g. Flatiron) / other professional program\nBachelors\nMasters\nDoctorate",
      "Preference.wording": "I am looking for people who completed:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "My 5-year goals are:",
      "AnswerOption": "",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "How I spend my free time during the week is:",
      "AnswerOption": "",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "I spend my weekends doing:",
      "AnswerOption": "",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "I exercise:",
      "AnswerOption": "Less than once a month\nOnce a month\nOnce a week\n2-3x a week\n4-7x a week",
      "Preference.wording": "Ideally, I would like to find someone who exercises:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "I smoke cigarettes:",
      "AnswerOption": "Never\nSometimes\nDaily",
      "Preference.wording": "Ideally, I would like to find someone who smokes:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "I drink:",
      "AnswerOption": "Never\nRarely\nWeekends only\nAbout 1-2x a week\nAbout 3-5x a week\nDaily",
      "Preference.wording": "Ideally, I would like to find someone who drinks:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "Marijuana:",
      "AnswerOption": "Never\nRarely\nWeekends only\nAbout 1-2x a week\nAbout 3-5x a week\nDaily",
      "Preference.wording": "Ideally, I would like to find someone who smokes marijuana:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "Other drugs:",
      "AnswerOption": "Never\nRarely\nWeekends only\nAbout 1-2x a week\nAbout 3-5x a week\nDaily",
      "Preference.wording": "Ideally, I would like to find someone who does other drugs:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "My biggest budget category is:",
      "AnswerOption": "Food \nClothing/Fashion \nGoing out \nHome/Furniture \nElectronics \nCars \nHobbies \nSavings \nInvesting",
      "Preference.wording": "My ideal match's biggest budget category would be:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "My second biggest budget category is:",
      "AnswerOption": "Food \nClothing/Fashion \nGoing out \nHome/Furniture \nElectronics \nCars \nHobbies \nSavings \nInvesting",
      "Preference.wording": "My ideal match's second biggest budget category would be:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "My third biggest budget category is:",
      "AnswerOption": "Food \nClothing/Fashion \nGoing out \nHome/Furniture \nElectronics \nCars \nHobbies \nSavings \nInvesting",
      "Preference.wording": "My ideal match's third biggest budget category would be:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "The core values I live by include:",
      "AnswerOption": "text",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "I am:",
      "AnswerOption": "Atheist\nAgnostic\nBuddhist\nCatholic\nChristian\nDaoist\nMormon\nJewish\nMuslim\nHindu\nSpiritual / unorganized religion\nOther or more than one\nI couldn't care less about religion",
      "Preference.wording": "My ideal match would be:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "categorical",
      "ProfileQuestion.wording": "Politics:",
      "AnswerOption": "apathetic\nDemocrat\nliberal\nlibertarian\nconservative\nRepublican\nother or more than one",
      "Preference.wording": "My ideal match would be those who are:"
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "Movies/shows I enjoy include:",
      "AnswerOption": "",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "My favorite reads include:",
      "AnswerOption": "",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "I am thankful for:",
      "AnswerOption": "",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "textual",
      "ProfileQuestion.wording": "I am passionate about:",
      "AnswerOption": "",
      "Preference.wording": ""
    },
    {
      "Editable": "TRUE",
      "ProfileQuestion.type": "ordinal",
      "ProfileQuestion.wording": "Regarding traveling, I:",
      "AnswerOption": "don't enjoy traveling\ndon't travel often but would like to travel more\ntravel once or more a year",
      "Preference.wording": "My ideal matches would be those who:"
    }
  ]

  data.each do | question_hash |
    if question_hash[:Editable] == "Y"
        editable = true
    else
        editable = false
    end

    question = ProfileQuestion.create(editable:editable, question_type:question_hash[:"ProfileQuestion.type"], wording: question_hash[:"ProfileQuestion.wording"])
    case question.question_type
        when "categorical"
            value = 0
            question_hash[:"AnswerOption"].split("\n").each do | wording |
                value = value + 1
                question.answer_options.create(wording:wording, value: value)
            end
        when "ordinal"
            value = 0
            question_hash[:"AnswerOption"].split("\n").each do | wording |
                value = value + 1
                question.answer_options.create(wording:wording, value: value)
            end
        when "textual"
        else
            puts question.question_type
    end

  end

  User.create(
      username: 'joshua@christetulit.org',
      password: 'Twinsen35%',
      preferences_attributes: ProfileQuestion.all.map do | question |
        {
            profile_question: question,
            answer_option: question.answer_options.first,
            importance: 1
        }
      end,
      profile_answers_attributes: ProfileQuestion.all.map do | question |
        {
            profile_question: question,
            answer_option: question.answer_options.first        }
      end
  )

  User.create(
    username: 'ray@christetulit.org',
    password: 'Twinsen36%',
    preferences_attributes: ProfileQuestion.all.map do | question |
        {
            profile_question: question,
            answer_option: question.answer_options.second,
            importance: 1
        }
      end,
    profile_answers_attributes: ProfileQuestion.all.map do | question |
      {
          profile_question: question,
          answer_option: question.answer_options.second
        }
    end
)

User.create(
    username: 'pablo@christetulit.org',
    password: 'Twinsen37%',
    preferences_attributes: ProfileQuestion.all.map do | question |
        {
            profile_question: question,
            answer_option: question.answer_options.first,
            importance: 1
        }
      end,
    profile_answers_attributes: ProfileQuestion.all.map do | question |
      {
          profile_question: question,
          answer_option: question.answer_options.first
      }
    end
)

User.create(
    username: 'stephen@christetulit.org',
    password: 'Twinsen38%',
    profile_answers_attributes: ProfileQuestion.all.map do | question |
      {
          profile_question: question,
          answer_option: question.answer_options.second
      }
    end,
    preferences_attributes: ProfileQuestion.all.map do | question |
        {
            profile_question: question,
            answer_option: question.answer_options.second,
            importance: 1
        }
      end
)

