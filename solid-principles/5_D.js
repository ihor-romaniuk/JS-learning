// Dependency inversion principle

class Fetch {
    request(url) {
        const dataFromFetch = 'data from fetch';
        // return fetch(url).then(res => res.json());
        return dataFromFetch;
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage';
        // return localStorage.getItem('key');
        return dataFromLocalStorage;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(key) {
        return this.fetch.request(key)
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}

const db1 = new Database(new FetchClient());
console.log(db1.getData('random data'));


const db2 = new Database(new LocalStorageClient());
console.log(db2.getData('random data'));
