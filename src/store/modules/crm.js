const clientModule = {
  state: {
    crm: [
      {
        id: "elead",
        name: "eLead",
        url: "https://www.eleadcrm.com/evo2/fresh/login.asp",
      },
      {
        id: "cyclcrm",
        name: "cyclCRM",
        url: "https://app.cyclcrm.com/",
      },
      {
        id: "lessannoyingcrm",
        name: "Less Annyoying CRM",
        url: "https://account.lessannoyingcrm.com/login/",
      },
      {
        id: "autorator",
        name: "Autorator",
        url: "https://ar.autoraptor.com/login",
      },
      {
        id: "simple-social",
        name: "Simple Social",
        url: "https://app.simpsocial.com/",
      },
    ],
    client: [
      {
        id: "rn",
        name: "Royal Nissan",
        CRM: "elead",
        username: "aad21845",
        password: "Taaa072022",
        stores: [{ id: "0000", name: "Royal Nissan" }],
      },
      {
        id: "rf",
        name: "Rogers Ford/Lincoln",
        CRM: "elead",
        username: "autoadagen",
        password: "Sales2022",
        stores: [{ id: "0000", name: "Rogers Ford/Lincoln" }],
      },
      {
        id: "hdf",
        name: "Hull Dobbs Ford",
        CRM: "elead",
        username: "autoagency",
        password: "July2022",
        stores: [{ id: "0000", name: "Hull Dobbs Ford" }],
      },
      {
        id: "bas-ash",
        name: "Benchmark Auto Sales Asheville",
        CRM: "cyclcrm",
        username: "autoagency",
        password: "123456789",
        stores: [{ id: "18785", name: "Benchmark Auto Sales Asheville" }],
      },
      {
        id: "bas-mc",
        name: "Benchmark Morehead City",
        CRM: "cyclcrm",
        username: "Tara",
        password: "password",
        stores: [{ id: "19425", name: "Benchmark Morehead City" }],
      },
      {
        id: "bas-ws",
        name: "Benchmark Winston-Salem",
        CRM: "cyclcrm",
        username: "autoadagency",
        password: "password",
        stores: [{ id: "19473", name: "Benchmark Winston-Salem" }],
      },
      {
        id: "sn2g",
        name: "Shift N2 Gear",
        CRM: "lessannoyingcrm",
        username: "jessieluvslife1978@gmail.com",
        password: "Wcmiw137!",
        stores: [{ id: "0000", name: "Shift N2 Gear" }],
      },
      {
        id: "kcs",
        name: "Knight's Car Store",
        CRM: "autorator",
        username: "johnfordknight@gmail.com",
        password: "Carstore1",
        stores: [{ id: "0000", name: "Knight's Car Store" }],
      },
      {
        id: "an",
        name: "Auto Now",
        CRM: "simple-social",
        username: "mark@theautoadagency.com",
        password: "Mangosteen7038",
        stores: [
          { id: "0000", name: "Wichita" },
          { id: "0000", name: "Topeka" },
          { id: "0000", name: "Belton" },
          { id: "0000", name: "Independence" },
          { id: "0000", name: "Wornall" },
          { id: "0000", name: "Olathe" },
          { id: "0000", name: "Wichita 2" },
          { id: "0000", name: "Dealership Number" },
        ],
      },
    ],
  },
  getters: {
    getTreeSelectClients: (state) => {
      const clients = state.client;
      let data = [];

      clients.forEach((client) => {
        let clientData = {};
        clientData.clientName = client.name;

        let clientData_stores = [];
        const stores = client.stores;
        stores.forEach((store) => {
          console.log();
          let storeData = {};
          storeData.clientId = client.id;
          storeData.storeName = store.name;
          storeData.storeId = store.id;
          clientData_stores.push(storeData);
        });
        clientData.stores = clientData_stores;
        data.push(clientData);
      });
      return data;
    },
  },
  mutations: {},
  actions: {},
};

export default clientModule;
