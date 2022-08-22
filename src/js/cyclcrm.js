import axios from "axios";
axios.defaults.withCredentials = true;
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

async function cyclcrm(requestInfo) {
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
  let data = [];
  const stores = requestInfo.stores;
  const periods = requestInfo.periods;
  await fetchData(data, stores, periods);
  result.data = data;

  console.log(result);
  return result;
}

async function authentication(authInfo) {
  let authResult = { isLoggedIn: true };
  const res = await axios({
    method: "post",
    url: `http://localhost:8080/cyclcrm/workers/login.php`,
    data: {
      dealer_id: authInfo.loginId,
      username: authInfo.username,
      password: authInfo.password,
    },
  });

  // Check Authentication Success
  if (res.data === "false") authResult.isLoggedIn = false;

  return authResult;
}

async function fetchData(data, stores, periods) {
  for (const store of stores) {
    // Switch Store
    //-Currently have no store to switch
    //-
    // Loop Period to collect data
    await loopPeriods(data, store, periods);
  }
}

async function loopPeriods(data, store, periods) {
  for (const period of periods) {
    let periodData = {
      status: "success",
      storeId: store.id,
      storename: store.name,
    };

    // Date Params
    const fromDate = period.from;
    const toDate = period.to;
    let from = dayjs(fromDate)
      .utcOffset(0)
      .format(`YYYY-MM-DDTHH:mm:ss.SSS[Z]`);
    let to = dayjs(toDate)
      .utcOffset(1440)
      .subtract(1, "millisecond")
      .format(`YYYY-MM-DDTHH:mm:ss.SSS[Z]`);
    periodData.from = dayjs(from).format("MM/DD/YYYY");
    periodData.to = dayjs(to).format("MM/DD/YYYY");

    // Get Lead Count
    let params = {
      from,
      to,
      tz_offset: -420,
      user_id: 0,
      location: "all",
    };
    console.l;
    const res_leadCount = await axios({
      method: "post",
      url: `http://localhost:8080/cyclcrm/workers/get_leads_count.php`,
      data: params,
    });

    let leadCount = res_leadCount.data;
    if (leadCount === false) {
      periodData.status = "failed";
      periodData.reason = "Error occur when getting lead count";
      data.push(periodData);
      continue;
    }
    periodData.leadCount = leadCount;

    // Get Sold Count
    const res_soldCount = await axios({
      method: "post",
      url: `http://localhost:8080/cyclcrm/workers/get_sales.php`,
      data: params,
    });

    let soldCount = res_soldCount.data;
    if (soldCount.err !== "" || soldCount === false) {
      periodData.status = "failed";
      periodData.reason = "Error occur when getting Sales count";
      data.push(periodData);
      continue;
    }
    periodData.soldCount = soldCount.sales.length;
    data.push(periodData);
  }
}

export default cyclcrm;
