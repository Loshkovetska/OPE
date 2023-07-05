export const emailValidate = (email: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const formateDDMMYY = (dt: Date) => {
  return `${
    String(dt.getDate())?.length > 1 ? dt.getDate() : `0${dt.getDate()}`
  }-${
    String(dt.getMonth() + 1)?.length > 1
      ? dt.getMonth() + 1
      : `0${dt.getMonth() + 1}`
  }-${dt.getFullYear()}`;
};

export const getGeneralDate = (date: string) => {
  return new Date(date).toLocaleDateString("en", {
    dateStyle: "long",
  });
};

export function transform(el: HTMLDivElement, transformValue: string) {
  el.style.transform = transformValue;
}

export function getTranslate(el:HTMLDivElement) {
  const translate:any = {};
  if (!window.getComputedStyle) return;

  const style = getComputedStyle(el);
  const transform =
    style.transform || style.webkitTransform

  let mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) {
    translate.x = mat ? parseFloat(mat[1].split(", ")[12]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(", ")[13]) : 0;
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    translate.x = mat ? parseFloat(mat[1].split(", ")[4]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(", ")[5]) : 0;
  }
  return translate;
}
