import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

async function cyclcrm(authInfo) {
  console.log(authInfo);
  // Log in
  const res = await axios.post(
    `https://app.cyclcrm.com/workers/login.php`,
    {
      dealer_id: authInfo.storeId,
      username: authInfo.username,
      password: authInfo.password,
    },
    {
      headers: {},
    }
  );

  console.log(res);
}

export default cyclcrm;
