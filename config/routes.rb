Rails.application.routes.draw do
  
  devise_for :users
<<<<<<< Updated upstream
  

=======
>>>>>>> Stashed changes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'groups#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end

