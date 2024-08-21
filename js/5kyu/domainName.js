function domainName(url) {
  const domain = url
    .split("/")
    .filter((el) => el !== "")
    .find((domain) => domain.includes("."));
  console.log(domain);
  const result = domain.split(".").filter((word) => word !== "www")[0];
  return result;
}
