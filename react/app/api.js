import config from "./config.js";
import * as types from "./constants/actions.js";

function log(message) {
  console.log(message);
}

// Helper function to post requests to our API server
// Expected options are:
// {
//   url: "/foobar",
//   params: "&foo=bar",
//   method: "post",
//   formData: formData,
//   authenticate: true,
//   success: function,
//   error: function,
//   dispatch: function,
// }
export default function request(options) {
  let absoluteUrl = config.API_BASE_URL + options.url + "?format=json";
  if (options.params) { absoluteUrl += options.params; }
  let fetchOptions = { method: options.method };
  if (options.formData) { fetchOptions.body = options.formData; }
  if (options.authenticate) {
    fetchOptions.headers = { "Authorization": "Token " + localStorage.token };
  }
  return fetch( absoluteUrl, fetchOptions ).then(res => {
    if (res.ok && res.status >= 200 && res.status < 300) {
      return res.json().then(resJson => {
        log(`Response 200 from ${res.url}:`);
        log(resJson);
        return options.success(resJson);
      });
    } else if (res.status === 500) {
      return res.json().then(resJson => {
        console.log(`Internal Server Error from ${res.url}:`);
        console.log(resJson);
        return options.dispatch({type: types.SERVER_ERROR, res: resJson});
      });
    } else {
      return res.json().then(resJson => {
        log(`Response Error ${res.status} from ${res.url}:`);
        log(resJson);
        return options.error(resJson);
      });
    }
  }).catch(function(ex) {
    console.log(`Network error happened for ${absoluteUrl}:`);
    console.log(ex);
    return options.dispatch({type: types.FETCH_ERROR, res: ex});
  });
}
