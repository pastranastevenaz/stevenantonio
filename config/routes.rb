Rails.application.routes.draw do
  get 'android/one'

  get 'android/two'

  get 'android/three'

  get 'android/four'

  get 'android/five'

  get 'android/six'

  get 'android/seven'

  get 'android/eight'

  get 'android/nine'

  get 'android/ten'

  get 'programming/one'

  get 'programming/two'

  get 'programming/three'

  get 'programming/four'

  get 'programming/five'

  get 'programming/six'

  get 'programming/seven'

  get 'programming/eight'

  get 'programming/nine'

  get 'programming/ten'

  get 'projects/thissite'

  get 'projects/network'

  get 'projects/clock'

  get 'projects/news'

  get 'lessons/programming'

  get 'lessons/html'

  get 'lessons/linux'

  get 'lessons/home'

  get 'lessons/android'

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
  resources "contacts", only: [:new, :create]

end
