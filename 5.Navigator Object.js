function detectBrowser() {
  const userAgent = navigator.userAgent;
  let browserName = "";
  let browserVersion = "";

  if (userAgent.indexOf("Firefox") !== -1) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Chrome") !== -1) {
    browserName = "Google Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Safari") !== -1) {
    browserName = "Apple Safari";
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (
    userAgent.indexOf("Opera") !== -1 ||
    userAgent.indexOf("OPR") !== -1
  ) {
    browserName = "Opera";
    browserVersion = userAgent.match(/(?:Opera|OPR)\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") !== -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Trident") !== -1) {
    browserName = "Internet Explorer";
    const match = userAgent.match(/rv:(\d+\.\d+)/);
    browserVersion = match ? match[1] : "";
  } else {
    browserName = "Unknown Browser";
    browserVersion = "Unknown Version";
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}

const browserInfo = detectBrowser();
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);
