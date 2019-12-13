require 'sinatra/base'

class Thermostat < Sinatra::Base

  enable :sessions

    get '/' do
      # p session[:city]
      @city = "Temperature outside: #{session[:city]}°C"
      erb :Thermostat
    end

    post '/city' do
      # session[:city] = params[:selectedCity]
      p params[:city]
      200
    end

  run! if app_file == $0

end
