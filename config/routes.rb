Rails.application.routes.draw do
  devise_for :users
  root 'front_pages#home'

  get '/front_pages/info' => 'front_pages#info'
  get '/front_pages/index' => 'front_pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
