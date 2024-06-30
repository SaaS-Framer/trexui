const codeColorReplacer = (code: string, colors: any) => {
  var codeX = code;
  for (const [key, value] of Object.entries(JSON.parse(colors))) {
    const regex = new RegExp(`${key}`, "g");
    codeX = codeX.replace(regex, value as any);
  }
  return codeX;
};
export { codeColorReplacer }