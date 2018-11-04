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
        if params[:id] == 'me'
            render json: current_user, include: [ :matches ]
        else
            user = User.find(params[:id])
            render json:user, include: [ :matches ]
        end
    end

    def update
        if params[:id] == 'me'
            current_user.update(user_params)
            if params[:image]
              current_user.avatar.attach(params[:image])
            end
            render json:user
        else
            user = User.find(params[:id])
            user.update(user_params)
            if params[:image]
              user.avatar.attach(params[:image])
            end
            render json:user
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json:user
    end

     def attachImage
      current_user.avatar.attach(params[:image])
      render json: {image: url_for(current_user.avatar)}
    end

     def image_params
      params.permit(:image)
    end

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :email, :billing_id, :image)
    end
end