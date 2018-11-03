class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]


    def create
        user = User.create(user_params)
        if user.valid?
          render json: user, status: :created
        else
          render json: {error: 'Failed to create user'}, status: :not_acceptable
        end
    end

    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json:user
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json:user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json:user
    end

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :email, :billing_id)
    end
end