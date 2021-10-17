const getURL = (): string => {
  const url =
    process?.env?.URL && process.env.URL !== ""
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ""
      ? process.env.VERCEL_URL
      : "http://localhost:4200"
  return url.includes("http") ? url : `https://${url}`
}

export default getURL
