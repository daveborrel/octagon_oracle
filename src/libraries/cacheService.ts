import Memcached from "memcached";

interface CacheServiceProps {
  client: Memcached;
  defaultTTL: number;
}

interface CacheServiceConfig {
  serverAddress: string | string[];
  defaultTTL?: number;
}

class CacheService implements CacheServiceProps {
  client: Memcached;
  defaultTTL: number;

  constructor(config: CacheServiceConfig) {
    this.client = new Memcached(config.serverAddress);
    this.defaultTTL = config.defaultTTL || 3600;
  }

  async getDataFromKey(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  async storeNewValueInCache(key, value, lifetime = this.defaultTTL) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, lifetime, (err) => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  }
}
