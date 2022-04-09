const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:3002");

client.on("connect", function () {
  /* Shared subscription */
  client.subscribe("$share/my-group/my-shared-topic", (err) => {
    if (err) console.error(err);
  });

  /* Non-shared subscription */
  //   client.subscribe("my-non-shared-topic", (err) => {
  //     if (err) console.error(err);
  //   });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(`Received message "${message}" on topic "${topic}"`);
  // client.end();
});
