export function logout(navigate: any) {
  localStorage.removeItem("user");
  navigate("/login");
}

export function getCurrentUser() {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
}
