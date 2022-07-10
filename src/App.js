import React, {Component} from "react";

class app extends Component{
      state = {
        nome: '----JØRDAN',
        idade: '----19',
        comidaFavorita: '----Pizza',
        musicasFavoritas: ['Hadaka no Yuusha','Imagine Dragons - Enemy','Ana Vilela - Trem-Bala','Melim - Meu Abrigo']
      }
      render (){
        return(
          <div>
            <h1>{this.state.nome}</h1>
            <h2>{this.state.idade}</h2>
            <h3>{this.state.comidaFavorita}</h3>
            <nav>
              <ul>
                <li>{this.state.musicasFavoritas[0]}</li>
                <li>{this.state.musicasFavoritas[1]}</li>
                <li>{this.state.musicasFavoritas[2]}</li>
                <li>{this.state.musicasFavoritas[3]}</li>
              </ul>
            </nav>
          </div>
        )
      }
}
export default app;