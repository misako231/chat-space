class MessagesController < ApplicationController
  def index
  end

  def create
    Message.create(:text, :image)
  end

  private
  def message_params
    params.permit(:text, :image).merge(user_id: current_user.id)
  end
end
