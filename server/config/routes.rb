Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
      namespace :v1 do
        resources :users do
          resources :matches
        end
        resources :profile_questions
        resources :profile_answers
        resources :preferences
        post '/login', to: 'auth#create'
        #post '/image' to: 'users#attachImage'
      end
  end



end
