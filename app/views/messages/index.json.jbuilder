json.array! @new_messages.each do |message|
  json.id message.id
  json.content message.content
  json.image message.image
  json.name message.user.name
  json.date message.created_at.strftime("%Y/%m/%d %H:%M")
end
