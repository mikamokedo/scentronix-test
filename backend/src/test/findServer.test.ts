import { findServer } from "../utils/findServer";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("findServer", () => {
  it("Should reject the error if no servers are online", async () => {
    const servers = [
      { url: "https://offiline1.com", priority: 1 },
      { url: "https://offiline2.com", priority: 2 },
      { url: "https://offiline3.com", priority: 3 },
    ];

    mockedAxios.get.mockImplementation(() => Promise.reject());

    await expect(findServer(servers)).rejects.toEqual("No servers are online.");
  });

  it("Should return the online  server with lowest priority", async () => {
    const servers = [
      { url: "https://offiline1.com", priority: 1 },
      { url: "https://online3.com", priority: 3 },
      { url: "https://online2.com", priority: 2 },
    ];

    mockedAxios.get.mockImplementation((url) => {
      if (url === "https://offiline1.com") {
        return Promise.reject();
      } else {
        return Promise.resolve({ status: 200 });
      }
    });

    expect(await findServer(servers)).toEqual({ url: "https://online2.com", priority: 2 });
  });
});
