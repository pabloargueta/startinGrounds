class Api::V1::ProfileQuestionsController < ApplicationController
    def create
        profile_question = ProfileQuestion.create(profile_question_params)
        render json: profile_question
    end

    def index
        render json: ProfileQuestion.all, include: [ :answer_options ]
    end

    def show
        profile_question = ProfileQuestion.find(params[:id])
        render json: profile_question
    end

    def update
        profile_question = ProfileQuestion.find(params[:id])
        profile_question.update(profile_question_params)
        render json: profile_question
    end

    def destroy
        profile_question = ProfileQuestion.find(params[:id])
        profile_question.destroy
        render json: profile_question
    end

    def profile_question_params
        params.permit()
    end
end