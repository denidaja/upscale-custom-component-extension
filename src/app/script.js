sendStartupEvents();

export const clickedProduct = {
  onlineShopID: "",
  productID: "",
  productName: "",
};

window.addEventListener(
  "message",
  (event) => {
    console.log("Received event:", event);
    if (event.data) {
      switch (event.data.eventType) {
        case "component_context": {
          clickedProduct.onlineShopID = event.data.keys["experienceId"];
          break;
        }
        case "product_detail_component_init": {
          clickedProduct.productID = event.data.keys["product.id"];
          clickedProduct.productName = event.data.keys["product.name"];
          break;
        }
        default:
          break;
      }
    }
  },
  false
);

function sendStartupEvents() {
  let initEvent = { type: "initialized", data: null };
  sendEvent(initEvent);

  let sizeEvent = { type: "sizeChange", data: { height: 70 } };
  sendEvent(sizeEvent);
}

function sendEvent(event, origin = "*") {
  window.parent.postMessage(event, origin);
}
