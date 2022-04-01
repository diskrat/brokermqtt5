const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883", { protocolVersion: 5 });

client.on("connect", function () {
  client.subscribe("presence", function (err) {});
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
