import cyclcrm from "./cyclcrm";
import lessannoyingcrm from "./lessannoyingcrm";

async function crmDistribute(requestInfo) {
  const crm = requestInfo.crm;
  switch (crm) {
    case "cyclcrm":
      await cyclcrm(requestInfo);
      break;
    case "lessannoyingcrm":
      await lessannoyingcrm(requestInfo);
      break;
  }
}

export default crmDistribute;
