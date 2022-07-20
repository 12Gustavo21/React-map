import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    gatinhos: [
      {
        raça: "Siames",
        cor: "Branco e preto"
      },
      {
        raça: "Persa",
        cor: "Preto"
      },
      {
        raça: "Van Turco",
        cor: "Branco"
      },
      {
        raça: "Vira lata",
        cor: "Chamuscado"
      },
      {
        raça: "Siberado",
        cor: "Amarelo e preto"
      },
      {
        raça: "Himalaio",
        cor: "Chamuscado"
      }
    ]
  };

  render() {
    return (
      <section>
        {this.state.gatinhos.map((g) => (
          <section>
            <h1>{g.raça}</h1>
            <p>{g.cor}</p>
          </section>
        ))}
      </section>
    );
  }
}
