let auth = false;

const login = (cb: any) => {
  auth = true;
  cb();
};

const logout = (cb: any) => {
  auth = false;
  cb();
};

export { login, logout, auth };
