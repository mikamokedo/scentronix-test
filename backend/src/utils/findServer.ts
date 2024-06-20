import { TServer } from "../constants/type";
import axios from "axios";

export const findServer = (servers: TServer[]): Promise<TServer> => {
  return new Promise((resolve, reject) => {
    Promise.all(
      servers.map((server) =>
        axios
          .get(server.url, { timeout: 5000 })
          .then((res) => (res.status >= 200 && res.status <= 299 ? server : null))
          .catch(() => null)
      )
    )
      .then((res) => {
        const availableServers = res.filter((server): server is TServer => server !== null);
        if (availableServers.length === 0) {
          reject("No servers are online.");
        } else {
          availableServers.sort((a, b) => a.priority - b.priority);
          resolve(availableServers[0]);
        }
      })
      .catch(() => {
        reject("No servers are online.");
      });
  });
};
