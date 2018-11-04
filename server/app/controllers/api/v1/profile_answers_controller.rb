class Api::V1::ProfileAnswersController < ApplicationController
    def create
        profile_answer = ProfileAnswer.create(profile_answer_params)
        render json: profile_answer
    end

    def index
        render json: ProfileAnswer.where(user: current_user), include: { profile_question: { include: [ :answer_options ]}}
    end

    def show
        profile_answer = ProfileAnswer.find(params[:id])
        render json: profile_answer
    end

    def update
        profile_answer = ProfileAnswer.find(params[:id])
        profile_answer.update(profile_answer_params)
        render json: profile_answer
    end

    def destroy
        profile_answer = ProfileAnswer.find(params[:id])
        profile_answer.destroy
        render json: profile_answer
    end

    def profile_answer_params
        params.permit(:profile_question_id, :answer_option_id, :wording)
    end
end