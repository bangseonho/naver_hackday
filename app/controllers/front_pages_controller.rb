require 'rubygems'
require 'rest_client'
require 'cgi'

class FrontPagesController < ApplicationController
  def home

  end

  def info
  	flight = Flight.new
  	flight.departure = params[:myCountry]
  	flight.arrival = params[:myCountry2]
  	flight.departureday = params[:departureday]
  	flight.arrivalday = params[:arrivalday]
  	flight.save

    # Request ariport API #
  	# url = 'http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList?ServiceKey=0WseDqrRGlPch1V5tVepuGfT4L%2FKTND3IQyyvCV%2FZEvqR5ltzam5jBIIHhZJZt4p0DGRrAFThw7iFaD7q9mF4A%3D%3D&schDate=<% flight.departureday %>&schDeptCityCode=<% flight.departure %>&schArrvCityCode=<% flight.arrival %>'
  	# headers = { :params => { CGI::escape('numOfRows') => '10'} }
		# @response = RestClient::Request.execute :method => 'GET', :url => url , :headers => headers
		# @response_xml = @response.body
  	# redirect_to '/front_pages/info'
  end
  
  def index
  	url = 'http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?ServiceKey=0WseDqrRGlPch1V5tVepuGfT4L%2FKTND3IQyyvCV%2FZEvqR5ltzam5jBIIHhZJZt4p0DGRrAFThw7iFaD7q9mF4A%3D%3D&schStTime=0600&schEdTime=1800&schLineType=I&schIOType=I&schAirCode=PUS'
		headers = { :params => { CGI::escape('numOfRows') => '20'} }
		@response = RestClient::Request.execute :method => 'GET', :url => url , :headers => headers
		@response_xml = @response.body
  end
end
