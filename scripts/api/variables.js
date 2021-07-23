const TIMESTAMP = '1627079339'
const PUBLIC_KEY = '7570b61f6a7d6c72209717887bfb1494'
const MD5 = 'cfdf9f5a2d727fc422ba6aecc13b3364'
const CONFIG_API = `?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${MD5}&limit=10`
let API_URL = `https://gateway.marvel.com:443/v1/public/characters${CONFIG_API}`;
let API_CHARACTER_URL = `https://gateway.marvel.com:443/v1/public/characters/`;