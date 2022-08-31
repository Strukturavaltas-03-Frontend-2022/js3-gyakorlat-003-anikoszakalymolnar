/* a setCookie-ban csak a Date konstruktor függvényt, a now() és a toUTCString()
 metódusokat használjátok. */

/* 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár! */

const setCookie = (text) => {
  const name = 'token';
  const expirationMinute = 15;
  const date = new Date(Date.now() + (expirationMinute * 60 * 1000));
  const expires = date.toUTCString();
  document.cookie = `${name}=${text};expires=${expires};path='/'`;
};

export default setCookie;
