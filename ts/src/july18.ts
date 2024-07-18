export function alphanumeric(string: string): boolean {
  let allowed = /^[0-9A-Za-z]+$/;
  return allowed.test(string) ? true : false;
}
