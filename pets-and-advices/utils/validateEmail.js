export function validateEmail(e, setValidEmail) {
  const input = e.target;
  const email = input.value;

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  setValidEmail(pattern.test(email));
}