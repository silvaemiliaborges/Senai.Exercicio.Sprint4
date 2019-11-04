import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';


class Main extends Component {
    constructor() {
        super();
        this.state = {
            medicos: [],
        };
    }

    componentDidMount() {
        this._carregarMedicos();
    }

    _carregarMedicos = async () => {
        await fetch('https://localhost:5000/api/medico')
        .then(resposta => resposta.json())
        .then(data => this.setState({medicos: data}))
        .catch(erro => console.warn(erro));

    };

    render() {
        return (
            <FlatList
            data={this.state.medicos}
            keyExtractor={item => item.idMedico}
            renderItem={({item}) => (
                <View>
                    <Text>{item.Nome}</Text>
                    <Text>{item.dataNascimento}</Text>
                    <Text>{item.crm}</Text>
                </View>
            )}
            />
        );
    }
} 


export default Main;