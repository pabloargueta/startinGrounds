class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    user = User.find_by(username: user_login_params[:username_or_email]) ||  User.find_by(email: user_login_params[:username_or_email])

    if user && user.authenticate(user_login_params[:password])
      token = encode_token({user_id: user.id})

      render json: { jwt: token}, status: :accepted
    else
      render json: {message: 'Invalid username, email, or password'}, status: :unauthorized
    end
  end


  private

  def user_login_params
    params.permit(:username_or_email, :password)
  end

end