This is the repo for stevenanton.io

So far I've created the application. Set up pages#index. I've setup bootstrap, a navbar, and a footer. I've 
added customized a bit of css.

---------------------------------------------------------
Left to do

-add Javascipt (done)
-add content
-add pages and partials (pages added. partials only started)

NEXT!!!!
-create sample lesson views(already made)
-change these views to partials.
-add this to the pages lessons

# views/devise/menu/_login_items.html.erb
<% if user_signed_in? %>
  <li>
  <%= link_to('Logout', destroy_user_session_path, :method => :delete) %>        
  </li>
<% else %>
  <li>
  <%= link_to('Login', new_user_session_path)  %>  
  </li>
<% end %>

-add a render link for the partials. 
-the initial partial should be for lessons/home

Good night
--------------------------------------------------