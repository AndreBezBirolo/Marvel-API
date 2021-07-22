const TIMESTAMP = '1626984353'
const PUBLIC_KEY = '7570b61f6a7d6c72209717887bfb1494'
const MD5 = 'd9ad2eb46cb43fc0ff91332c531313d3'
let API_URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${MD5}&limit=10`;
const OFFSET = 10
const PAGE = 0