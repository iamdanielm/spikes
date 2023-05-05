export const camelCaseToNormalCase = (string) => {
  const result = string.replace(/[A-Z]/g, ' $&');
  return result.charAt(0).toUpperCase() + result.slice(1);
}