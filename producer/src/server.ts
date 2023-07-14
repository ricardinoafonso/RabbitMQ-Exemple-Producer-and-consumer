import RabbitServerMQ from "./RabbitMQServer";

(async () => {
  const server = new RabbitServerMQ();
  await server.start();
  let i = 0;
  setInterval(async () => {
    await server.producer("live_test", JSON.stringify({ id: i++ }));
  }, 1000);
})();
