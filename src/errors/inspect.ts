

export default (err: any) => {
  return Bun.inspect(err, { depth: 8 })
}
