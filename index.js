//stark 交易笔数
 
import requests

url = "https://api.starkscan.io/v1/account/transactions"

querystring = {"account":"GA6JN7ZGJZLJG5L2ON4JX3XJZJ5Z2ZJ5Z2Z2ZJ5Z2Z2ZJ5Z2Z2ZJ5Z2"}

headers = {
    "Accept": "application/json"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.json()["count"])



# 获取stark上次交易时间
import requests

url = "https://api.starkscan.io/v1/account/transactions"

querystring = {"account":"GA6JN7ZGJZLJG5L2ON4JX3XJZJ5Z2ZJ5Z2Z2ZJ5Z2Z2ZJ5Z2Z2ZJ5Z2"}

headers = {
    "Accept": "application/json"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.json()["transactions"][0]["timestamp"])
