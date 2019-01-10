FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image   File.open("#{Rails.root}/public/images/no_image.jpeg")
    user
    group
  end
end
