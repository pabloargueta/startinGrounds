class Api::V1::PreferencesController < ApplicationController
    def create
        preference = Preference.create(preference_params)
        render json: preference
    end
    
    def index
        render json: Preference.all
    end
    
    def show
        preference = Preference.find(params[:id])
        render json: preference
    end
    
    def update
        preference = Preference.find(params[:id])
        preference.update(preference_params)
        render json: preference
    end
    
    def destroy
        preference = Preference.find(params[:id])
        preference.destroy
        render json: preference
    end
    
    def preference_params
        params.permit(:profile_question_id, :answer_option_id, :wording)
    end
end