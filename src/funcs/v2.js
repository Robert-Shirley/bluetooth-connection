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
try {
  const connectedDevice = await device.gatt.connect();
  const services = await connectedDevice.getPrimaryServices();

  console.log(services);
  try {
    const chars = await services[0].getCharacteristics();
    console.log(chars[0]);
    const read = await chars[0].readValue();
    chars[0].addEventListener("oncharacteristicvaluechanged", elisten);
    console.log(read);
  } catch (e) {
    console.log("error", e);
  }
  try {
    const chars = await services[1].getCharacteristics();
    console.log(chars[0]);

    chars[0].addEventListener("oncharacteristicvaluechanged", elisten);
    const read = await chars[0].readValue();
    console.log(read);
  } catch (e) {
    console.log("error", e);
  }
  try {
    const chars = await services[2].getCharacteristics();

    chars[0].addEventListener("oncharacteristicvaluechanged", elisten);
    console.log(chars[0]);
  } catch (e) {
    console.log(e);
  }
  try {
    const chars = await services[3].getCharacteristics();
    console.log(chars[0]);

    chars[0].addEventListener("oncharacteristicvaluechanged", elisten);
    const read = await chars[0].readValue();
    console.log(read);
  } catch (e) {
    console.log("error", e);
  }
  try {
    const chars = await services[4].getCharacteristics();
    console.log(chars[0]);

    chars[0].addEventListener("oncharacteristicvaluechanged", elisten);
    const read = await chars[0].readValue();
    console.log(read.buffer);
  } catch (e) {
    console.log("error", e);
  }
  //const readVal = await chars[0].write();
  //console.log(readVal)

  //const read = await chars[0].readValue()
  //console.log("read", read)
} catch (e) {
  console.log(e);
}
