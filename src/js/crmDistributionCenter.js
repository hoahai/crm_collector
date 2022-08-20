import cyclcrm from "./cyclcrm";

async function crmDistribute(requestInfo) {
  const crm = requestInfo.crm;
  switch (crm) {
    case "cyclcrm":
      await cyclcrm(requestInfo);
      break;
  }
}

export default crmDistribute;
