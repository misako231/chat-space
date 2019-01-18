json.id @message.id
json.content @message.content
json.image @message.image_url
json.user_name @message.user.name
json.user_id @message.user.id
json.group_id @message.group.id
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
