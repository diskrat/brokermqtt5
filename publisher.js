const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:3002");

client.on("connect", function () {
  /* Shared subscription */
  client.subscribe("my-shared-topic", function (err) {
    if (!err) {
      client.publish("my-shared-topic", "Hello mqtt from shared topic");
    }
  });

  /* Non-shared subscription */
  // client.subscribe("my-non-shared-topic", function (err) {
  //     if (!err) {
  //         client.publish(
  //             "my-non-shared-topic",
  //             "Hello mqtt from non-shared topic"
  //         );
  //     }
  // });
});
