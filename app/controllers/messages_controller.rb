class MessagesController < ApplicationController
  def new
  end

  def show
    text_to_alert = 'Hello There'
    render plain: text_to_alert
  end
end