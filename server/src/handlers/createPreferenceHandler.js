const { MercadoPagoConfig, Preference } = require("mercadopago");

const createPreference = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken:
      "APP_USR-7914171291168511-080316-5ff6614f9201e62b97a533816237206c-1931011104",
  });

  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://www.youtube.com/",
        failure: "https://www.youtube.com/",
        pending: "https://www.youtube.com/",
      },
    };

    const preference = new Preference(client);

    const result = await preference.create({ body });

    console.log(result);

    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(client);
    console.log(error);
    res.status(500).json({ error: "error al crear la preferencia" });
  }
};

module.exports = { createPreference };
