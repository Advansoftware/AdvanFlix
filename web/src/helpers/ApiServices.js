import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();
function getBrowserId() {
  var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera", "Edg"],
    sUsrAg = navigator.userAgent,
    nIdx = aKeys.length - 1;

  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

  return nIdx;
}
let devices = [
  "Internet Explorer",
  "Firefox",
  "Safari",
  "Chrome",
  "Opera",
  "Edge Chromium",
];
const deviceName = devices[getBrowserId()]; /* navigator.userAgent; */
const getUrl =
  process.env.REACT_APP_URL || "http://app.advansoftware.shop:8096/";
let token = JSON.parse(localStorage.getItem("me"));
let AccessToken = token?.AccessToken || "";

const config = {
  headers: {
    "X-Emby-Authorization": `MediaBrowser Client="Advanflix", Device="${deviceName}", DeviceId="${id}", Version="0.0.1", Token="${AccessToken}"`,
  },
};

export const Apiget = async (url, params = null) => {
  let userId = token?.User.Id || "";
  !!params
    ? (url = getUrl + url + "?" + "userId=" + userId + "&" + params)
    : (url = getUrl + url);
  let data = await axios.get(url, config);
  return data;
};

export const Apipost = async (url, params) => {
  let data = await axios.post(getUrl + url, params, config);
  return data;
};

/* const auth = () => {
  // Importar o axios

  // Criar uma instância do axios com a url do servidor

  // Definir o usuário e a senha
  const user = "bruno";
  const password = "@Brunrego2022";

  // Obter o token de autenticação usando o método POST
  api
    .post("/Users/AuthenticateByName", {
      Username: user,
      Pw: password,
    })
    .then((response) => {
      // Armazenar o token e o id do usuário
      const token = response.data.AccessToken;
      const userId = response.data.User.Id;

      // Configurar o cabeçalho de autorização com o token

      // Acessar a api usando o método GET
      // Retornar uma lista de itens de mídia que correspondem ao termo de busca
      api
        .get(`/Users/${userId}/Items`, {
          params: {
            SearchTerm: "O Senhor dos Anéis",
            IncludeItemTypes: "Video",
          },
        })
        .then((response) => {
          // Exibir os resultados
          console.log(response.data.Items);
        })
        .catch((error) => {
          // Lidar com os erros
          console.error(error);
        });
    })
    .catch((error) => {
      // Lidar com os erros
      console.error(error);
    });
};
 */
