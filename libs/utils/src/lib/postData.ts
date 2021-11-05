type Args = {
  url: string
  token: string
  data: Record<string, any>
}

const postData = async ({ url, token, data = {} }: Args): Promise<any> => {
  return await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
    body: JSON.stringify(data)
  })
    .then((res) => {
      res.json()
    })
    .catch((res) => {
      throw res.error ?? res
    })
}

export default postData
