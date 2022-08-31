/* 2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban, ahol a
sütik neve a key és az értéke a value (pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az adott süti
nevével és értékével
- `flush`: törli az összes sütit

A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF */

const cookieHandler = {
  getAll() {
    const obj = {};
    document.cookie.split('; ').forEach((entry) => {
      const [key, value] = entry.split('=');
      Object.assign(obj, { [key]: value });
    });
    return obj;
  },
  flush() {
    const obj = this.getAll();
    Object.keys(obj).forEach((key) => {
      document.cookie = `${key}=; experies=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  },
  toSessionStorage() {
    const obj = this.getAll();
    // https://masteringjs.io/tutorials/fundamentals/foreach-object
    Object.entries(obj).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  },
};

export {
  cookieHandler,
}
