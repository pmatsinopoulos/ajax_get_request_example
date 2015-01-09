class MessagesController < ApplicationController
  def new
  end

  def show
    text_to_alert = 'Hello There'
    render text: text_to_alert
  end
end