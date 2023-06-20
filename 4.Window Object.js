function openWindow(url, width, height) {
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},top=${top},left=${left}`;
  window.open(url, "_blank", options);
}

openWindow("https://www.google.com", 800, 600);
