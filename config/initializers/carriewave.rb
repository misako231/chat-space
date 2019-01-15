require 'carriewave/storage/abstract'
require 'carriewave/storage/file'
require 'carriewave/storage/fog'

CarrieWave.configure do |config|
  config.strage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: Rails.application.secrets.aws_access_key_id,
    aws_secret_access_key: Rails.application.secrets.aws_secret_access_key,
    region: 'ap-northeast-1'
  }

  config.fog_directory = 'upload-test'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/upload-test'
end

