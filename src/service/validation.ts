type ValidType = (value: string) => boolean

export const validCompany: ValidType = value => {
  const isErr: boolean = value.length < 4
  return isErr;
}

export const validName: ValidType = value => {
  const isErr = value.length < 4
  return isErr;
}

export const validEmail: ValidType = value => {
  const regex = new RegExp(
    /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
  )
  const isErr = !regex.test(value)
  return isErr;
}

export const validTel: ValidType = value => {
  const isErr = value.length < 8 || isNaN(Number(value))
  return isErr;
}

export const validMessage: ValidType = value => {
  const isErr = value.length < 10;
  return isErr;
}

