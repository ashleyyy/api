get '/' do
  erb :index
end

get '/photos' do 
  require 'open-uri'
  if params[:tag] != ""
    tag = params[:tag]
  else
    tag = 'pancake'
  end
  open("https://api.instagram.com/v1/tags/#{tag}/media/recent?access_token=227162623.5b9e1e6.8d3688b466654fdfbe96b3a03f060047").read 
end
