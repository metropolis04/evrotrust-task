export const postFetchAsync = async <T>(url:string , bodyData:Record<string, any> , message?:Record<string, string>): Promise<T> => {
    return new Promise((res,rej) => {
      fetch(`${url}` , {
        method : "POST",
        body : JSON.stringify(bodyData),
        headers : {
          "Content-Type" : "application/json"
        }
      }).then(res => res.json())
        .then(data => {
          if (data) {
            res(data)
          } else {
            rej({error : message?.data ?? 'no data'})
          }
        }).catch(error => {
          rej(error)
          console.log(error , message?.error ?? "Error to fetch data")
        })
    })
  }

  