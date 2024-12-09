export default function authHeader() {
  const userStr = localStorage.getItem("userToken");
  let user = null;
  if (userStr) user = JSON.parse(userStr);
  if (user) return user;
  else return null;
}
