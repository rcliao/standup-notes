// to abstract authentication functionality
export class Auth {
  token: null;

  login () {
    this.token = 'hello token';
  }

  logout () {

  }

  isAuthenticated () {
    return this.token !== null;
  }
};
