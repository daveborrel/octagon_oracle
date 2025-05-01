// cacheInstance.ts

/**
 * Added into a seperate file because
 * (1) - Singleton prevents any other instance of memcache to be accessed
 * (2) - Not placed into server.js as we want that file to only handle setting up the application
 * (3) - Easier to change down the road
 */

import CacheService from "./cacheService";

const cache = new CacheService({
  serverAddress: "localhost:11211", // or your Memcached server address
  defaultTTL: 3600, // optional
});

export default cache;
