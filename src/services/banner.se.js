const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function fetchBanner() {
  await sleep(700);
  return {
    data: [
      {
        id: 1,
        title: "WANDERLUST INVOCATION",
        imgUrl:
          "https://www.gensh.in/fileadmin/Database/Banner_Gacha/2020/2020-07_Wanderlust_Invocation.png",
        description: "Standard Banner",
        expiry: "Did not expire",
      },
      {
        id: 2,
        title: "WANDERLUST INVOCATION2",
        imgUrl:
          "https://www.gensh.in/fileadmin/Database/Banner_Gacha/2020/2020-07_Wanderlust_Invocation.png",
        description: "Standard Banner",
        expiry: "Did not expire",
      },
      {
        id: 3,
        title: "WANDERLUST INVOCATION3",
        imgUrl:
          "https://www.gensh.in/fileadmin/Database/Banner_Gacha/2020/2020-07_Wanderlust_Invocation.png",
        description: "Standard Banner",
        expiry: "Did not expire",
      },
      {
        id: 4,
        title: "WANDERLUST INVOCATION3",
        imgUrl:
          "https://www.gensh.in/fileadmin/Database/Banner_Gacha/2020/2020-07_Wanderlust_Invocation.png",
        description: "Standard Banner",
        expiry: "Did not expire",
      },
      {
        id: 5,
        title: "WANDERLUST INVOCATION3",
        imgUrl:
          "https://www.gensh.in/fileadmin/Database/Banner_Gacha/2020/2020-07_Wanderlust_Invocation.png",
        description: "Standard Banner",
        expiry: "Did not expire",
      },
    ],
  };
}
