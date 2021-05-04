import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'

export default class Home extends React.Component {
	state = {
		pagina: 'etapa 1'
	}

	render() {
		const irParaEtapa2 = () => {
			this.setState({ pagina: 'etapa 2' })
		}
		const irParaEtapa3 = () => {
			this.setState({ pagina: 'etapa 3' })
		}
		const irParaEtapaFinal = () => {
			this.setState({ pagina: 'etapa final' })
		}

		const renderizar = () => {
			switch (this.state.pagina) {
				case 'etapa 1':
					return <Etapa1 avancarEtapa={irParaEtapa2} />

				case 'etapa 2':
					return <Etapa2 avancarEtapa={irParaEtapa3} />

				case 'etapa 3':
					return <Etapa3 avancarEtapa={irParaEtapaFinal} />

				case 'etapa final':
					return <EtapaFinal/>

				default:
					return <p>Erro! Página não encontrada!</p>
			}
		};

		return <div>
			{renderizar()}
		</div>

	}
}

