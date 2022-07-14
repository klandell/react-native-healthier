function waterfall(fns: (() => Promise<any>)[]) {
  return fns.reduce((p, fn) => p.then(fn), Promise.resolve());
}
export default waterfall;
