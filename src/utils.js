export const isImage = (file) => {
    return file.type.includes('image');
}
export const openOptionsPage = () => {
    chrome.runtime.openOptionsPage();
    window.close();
}
// 把image 转换为 canvas对象 
const imgToCanvas =(image) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas;
}
//canvas转换为image
const canvasToImg = (canvas) => {
    const array = ["image/webp", "image/jpeg", "image/png"];
    const type = 'image/png';
    const src = canvas.toDataURL(array[type]);
    return src;
}
// 转为png
export const convertToPng = (img) => {
    try {
        const png = canvasToImg(imgToCanvas(img))
        return png;
    } catch (error) {
        console.log('error: ', error);
        return null;
    }
}
// 转为boolean值
export const toBoolean = (val) => {
    if(typeof val === 'boolean') {
        return val;
    }
    if(typeof val === 'string') {
        return val === 'true';
    }
    return false;
}