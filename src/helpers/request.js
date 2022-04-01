class Request {

    constructor() {
      this.baseUrl = "https://minta-pirate-service.herokuapp.com"
    }

    get(url) {
      return fetch(this.baseUrl + url)
      .then((res) => res.json());
    }

    delete(url) {
      return fetch(this.baseUrl + url, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
    }

    post(url, payload){
      return fetch(this.baseUrl + url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

    patch(url, payload){
      return fetch(this.baseUrl + url, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

}

export default Request;
