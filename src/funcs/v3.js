const languageEncoding = require("detect-file-encoding-and-language");
var jschardet = require("jschardet");

export const try3 = async (setsdlk) => {
  const controlServiceUUID = "02a6c0f0-0451-4000-b000-fb3210111989";
  const commandCharacteristicUUID = "00001800-0000-1000-8000-00805f9b34fb"; // [READ]
  const commandCharacteristicUUID2 = "00002a0f-0000-1000-8000-00805f9b34fb"; // [READ, NOTIFY]

  console.log("Searching Bluetooth Device...");
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
    optionalServices: [
      "00001800-0000-1000-8000-00805f9b34fb",
      "00001801-0000-1000-8000-00805f9b34fb",
      "0000180a-0000-1000-8000-00805f9b34fb",
      "02a6c0d0-0451-4000-b000-fb3210111989",
      "02a6c0f0-0451-4000-b000-fb3210111989",
    ],
  });
  const connect = await device.gatt.connect();
  const server = await connect.getPrimaryServices();
  const decoder = new TextDecoder();

  //console.log(server)

  for (const instanc of server) {
    //console.log(instanc);
    try {
      const stat = await instanc.getCharacteristics();
      //   const read = await stat.readValue();
      //   console.log(read);
      //stat.addEventListener("oncharacteristicvaluechanged", test);
      for (const val of stat) {
        try {
          const decoder = new TextDecoder();
          //const info = await val.readValue();
          //   console.log(info);
          //console.log(decoder.decode(info));
          //   // const decoder = new TextDecoder("utf-8");
          // console.log(`User Description:, `, decoder.decode(info));
          //val.addEventListener("characteristicvaluechanged", test);
          //   if (val.properties.write) {
          //const info = await val.readValue();

          // console.log(val);
          //val.oncharacteristicvaluechanged = test;
          val.addEventListener("characteristicvaluechanged", async (event) => {
            if (event.target.value.byteLength === 20) {
              console.log(event.target.value);
              const xxx = decoder.decode(event.target.value);
              console.log(xxx);
              setsdlk(xxx);
              //console.log(typeof event.target.value.buffer.getInt16());
            }
            // console.log(encc);
            //   console.log(
            //     `User Description:, `,
            //     decoder.decode(event.target.value.buffer)
            //   );
            //   console.log(event.target.value.getFloat64());
            //   console.log(event.target.value.getInt16());
            //   console.log(event.target.value.getUint16());
            //   console.log(event.target.value.getUint32());
            //   console.log(event.target.value.getInt32());
            //   console.log(event.target.value.getFloat64());
            // }
            //   console.log(
            //     `User Description:, `,
            //     decoder.decode(event.target.value.buffer)
            //   );
            //await val.stopNotifications();
          });
          await val.startNotifications();
          //  }
          //   const read = await val.readValue();
          //   console.log(read.buffer.byteLength);
        } catch (e) {
          // console.log(e);
        }
      }
    } catch (e) {
      // console.log(e);
    }
  }
  //   server.forEach((instanc) => {

  //       let stats = await instanc.getCharacteristics();
  //       console.log(stats);

  //   });

  //   .then((server) => {
  //     // Step 3: Get the Service
  //     let serverInstance = server;
  //     return server.getPrimaryServices();
  //     return server.getPrimaryService(commandCharacteristicUUID);
  //     console.log("Getting PrimaryService");
  //   })

  //   .then((service) => {
  //     const dets = service.map((services) => services.getCharacteristics());
  //     console.log("here", dets);
  //     //service.getCharacteristic(commandCharacteristicUUID);
  //     return service.getCharacteristics();
  //     console.log("Getting Characteristic");
  //   })

  //   .then((characteristic) => {
  //     // 0x01,3,0x02,0x03,0x01
  //     console.log(characteristic);

  //     characteristic.addEventListener("characteristicvaluechanged", test);
  //   })

  //   .catch(function (error) {
  //     console.log("Something went wrong. " + error);
  //   });

  function test(event) {
    //let commandValue = event.target.value.getUint8(0);
    console.log(event.target.value);
  }
};
