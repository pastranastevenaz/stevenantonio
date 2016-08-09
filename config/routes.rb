Rails.application.routes.draw do
  get 'lessons/home'

  get 'lessons/html_css'

  get 'lessons/javascript'

  get 'lessons/ruby_rails'

  devise_for :users
  get 'pages/index'

  get 'pages/about'

  get 'pages/portfolio'

  get 'pages/lessons'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "pages#index"

  resources :pages
  
end
