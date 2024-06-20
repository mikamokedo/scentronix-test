import { SERVERS_LIST } from "./constants/server-list";
import { findServer } from "./utils/findServer";

function main() {
  findServer(SERVERS_LIST)
    .then((server) => {
      console.log(server);
    })
    .catch((err) => {
      console.log(err);
    });
}

main();
