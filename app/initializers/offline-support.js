export function initialize(application) {
  const notify = application.__container__.lookup("service:notify");

  if ("serviceWorker" in window.navigator) {
    window.navigator.serviceWorker.register("/offline-support.js").then((registration) => {
      const isUpdate = !!registration.active;

      registration.onupdatefound = function () {
        registration.installing.onstatechange = function () {
          console.log('state', this.state);
          if (this.state === "installed") {
            if (isUpdate) {
              notify.info("App updated. Restart for the new version.");
            } else {
              notify.success("App ready for offline use.");
            }
          }
        };
      };
    }).catch((err) => {
      console.log(err);
    });
  }
}

export default {
  name: 'offline-support',
  initialize
};
