data = decodeURIComponent(window.location.search.replace('?', '')).split('}')[0] + '}'
console.log(data)
const json = JSON.parse(data)
console.log(json['post_img'])
console.log(json['user_pic'])
console.log(json['user'])
console.log(json['likes'])
//document.querySelector('#txt').innerHTML = text
document.querySelector('#post_img').src = `api.scraperapi.com/?api_key=010e6bdc516d1ce035d6eeb741d5ac45&url=${json['post_img']}`
document.querySelector('#user_pic1').src = `api.scraperapi.com/?api_key=010e6bdc516d1ce035d6eeb741d5ac45&url=${json['user_pic']}`
document.querySelector('#user_pic2').src = `api.scraperapi.com/?api_key=010e6bdc516d1ce035d6eeb741d5ac45&url=${json['user_pic']}`
document.querySelector('#user_name1').innerHTML = json['user']
document.querySelector('#user_name2').innerHTML = json['user']
document.querySelector('#like_count').innerHTML = json['likes']
