import { RabbitServerMQ } from "./RabbitMQServer";

(async () => {
  const consumerServer = new RabbitServerMQ();
  await consumerServer.consumer("live_test", (message) => {
    if (message.content.toString() != null) {
      const data = JSON.parse(message.content.toString());
      console.log(data);
    }
  });
})();
