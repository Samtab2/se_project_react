class Api {
  constructor({ baseUrl, headers }) {
    // constructor body
    this.baseUrl = baseUrl;
    this._headers = headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error ${res.status}`);
  }

  getItems() {
    return fetch(`${this.baseUrl}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  addItem({ name, imageUrl, weather }, token) {
    return fetch(`${this.baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    });
    }

  deleteItem(id, token) {
    return fetch(`${this.baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
  }

  addLike(id, token) {
    return fetch(`${this.baseUrl}/items/${id}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
  }

  removeLike(id, token) {
    return fetch(`${this.baseUrl}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
  }
}

export default Api;
