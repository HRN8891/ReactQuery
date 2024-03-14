class Token {
  public getToken(key: string): string {
    // return localStorage.getItem(key);
    return 'token';
  }

  public async setToken(key: string, token: string) {
    // localStorage.setItem(key, token);
  }

  public removeToken(key: string) {
    // localStorage.removeItem(key);
  }
}

export default new Token();
