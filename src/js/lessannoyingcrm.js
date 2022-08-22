import axios from "axios";
// import { parse } from "himalaya";
axios.defaults.withCredentials = true;
// const dayjs = require("dayjs");

async function lessannoyingcrm(requestInfo) {
  let result = {
    status: "success",
    authentication: "success",
  };
  // Log in
  const authInfo = requestInfo.authInfo;
  const authResult = await authentication(authInfo);
  if (!authResult.isLoggedIn) {
    result.status = "failed";
    result.reason = "Failed to Login";
    return result;
  }

  // Fetching data
  // let data = [];
  // const stores = requestInfo.stores;
  // const periods = requestInfo.periods;
  // await fetchData(data, stores, periods);
  // result.data = data;

  console.log(result);
  return result;
}

async function authentication(authInfo) {
  let authResult = { isLoggedIn: true, PipelineId: null };
  const res = await axios({
    method: "post",
    url: `/lessannoyingcrm/ajax/login.php`,
    data: {
      Email: authInfo.username,
      Password: authInfo.password,
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  // // Check Authentication Success
  if (res.data !== "SUCCESS") authResult.isLoggedIn = false;
  console.log(res.data);

  // Get PipelineId
  // const form = new FormData();
  // form.append("Email", authInfo.username);
  // form.append("Password", authInfo.password);

  // const afff = await fetch(`/lessannoyingcrm/ajax/login.php`, {
  //   method: "POST",
  //   body: form,
  // });
  // console.log(await afff.text());
  // const ddd = await fetch(`/lessannoyingcrm/app/Workspace`, {
  //   credentials: "include",
  //   redirect: "follow",
  // });
  // console.log(await ddd.text());

  const res_workspace = await axios.request({
    method: "get",
    url: `/lessannoyingcrm/app/Workspace`,
  });

  console.log(res_workspace.data);
  return authResult;
}

// async function fetchData(data, stores, periods) {
//   for (const store of stores) {
//     // Switch Store
//     //-Currently have no store to switch
//     //-
//     // Loop Period to collect data
//     await loopPeriods(data, store, periods);
//   }
// }

// async function loopPeriods(data, store, periods) {
//   for (const period of periods) {
//     let periodData = {
//       status: "success",
//       storeId: store.id,
//       storename: store.name,
//     };

//     // Date Params
//     const fromDate = period.from;
//     const toDate = period.to;
//     let from;
//     let to;

//     // Get Lead Count

//     // Get Sold Count

//     data.push(periodData);
//   }
// }

export default lessannoyingcrm;
