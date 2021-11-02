import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site porno",
          type: "deposit",
          category: "Dev",
          amount: 10000,
          createdAt: new Date("2021-08-31 17:00:00"),
        },
        {
          id: 2,
          title: "Conserto de ar condicionado",
          type: "withdraw",
          category: "T.I",
          amount: 60,
          createdAt: new Date("2021-09-30 17:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => this.schema.all("transaction"));

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
