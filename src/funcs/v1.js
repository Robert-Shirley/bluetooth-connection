export const trythis = () => {
  const controlServiceUUID = "02a6c0f0-0451-4000-b000-fb3210111989";
  const commandCharacteristicUUID = "00001800-0000-1000-8000-00805f9b34fb"; // [READ]
  const commandCharacteristicUUID2 = "00002a0f-0000-1000-8000-00805f9b34fb"; // [READ, NOTIFY]

  console.log("Searching Bluetooth Device...");

  navigator.bluetooth
    .requestDevice({
      filters: [
        {
          name: "GLM165-27CG x1857",
        },
      ],
      optionalServices: [controlServiceUUID],
    })

    .then((device) => {
      console.log("Got device name: ", device.name);
      console.log("id: ", device.id);
      return device.gatt.connect();
    })

    .then((server) => {
      // Step 3: Get the Service
      let serverInstance = server;
      return server.getPrimaryServices();
      return server.getPrimaryService(commandCharacteristicUUID);
      console.log("Getting PrimaryService");
    })

    .then((service) => {
      const dets = service.map((services) => services.getCharacteristics());
      console.log("here", dets);
      //service.getCharacteristic(commandCharacteristicUUID);
      return service.getCharacteristics();
      console.log("Getting Characteristic");
    })

    .then((characteristic) => {
      // 0x01,3,0x02,0x03,0x01
      console.log(characteristic);

      characteristic.addEventListener("characteristicvaluechanged", test);
    })

    .catch(function (error) {
      console.log("Something went wrong. " + error);
    });

  function test(event) {
    let commandValue = event.target.value.getUint8(0);
    console.log("Hello");
  }
};
