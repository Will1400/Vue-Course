let timer = null;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  async auth(context, payload) {
    let url =
      payload.mode === 'login'
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvGDtjY3NGQ9x-NuVGqp_k3Oxva91ZP74'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvGDtjY3NGQ9x-NuVGqp_k3Oxva91ZP74';

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.messsage || 'Failed to authenticate');
      throw error;
    }

    const expirationDate = new Date().getTime() + data.expiresIn * 1000;
    localStorage.setItem('token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('setAutoLogout');
    }, data.expiresIn);

    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage('tokenExpiration');

    const expiresIn = tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      context.dispatch('logout');
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('setAutoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);
    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};
