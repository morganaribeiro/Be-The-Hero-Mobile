import React, { useState , useEffect } from 'react';
import { View , Image , FlatList, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import 'intl';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation(); /* useNavigation corresponde a mesma função do useHistory da Web */
    
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0); /* Ínicia com 0 pq é numérico */

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigationToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if(loading) { // loading == true, quer evitar enquanto uma requisição esta sendo feita, que mais uma requisição venha a acontecer, se a página já tiver carregando não tenta fazer de novo.
            return;
        }
        // total > 0 quer dizer que carregou pelo menos a primeira page
        if ( total > 0 && incidents.length  == total) { // se isso for verdade, não faz sentido buscar mais informações, uma vez que já tenha carregado todas
            return;
        }
        setLoading(true);

        setLoading(true); // antes mesmo de começar a requisição, vou dizer que já vai começar a requisitar a api
        const response = await api.get(`incidents?page=${page}`);

        setIncidents([...incidents, ... response.data]); // Os dados que são passados da API
        setTotal(response.headers['x-total-count']);
        console.log(response.headers['x-total-count']);
        setPage(page + 1); // Pula para próxima página
        setLoading(false); // no fim da requisição vou dar o SetLoading como falso, no fim de tudo;
        // console.log(response);

    }

    useEffect(() => {
        loadIncidents()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
                </Text>
            </View>
            
            <Text style={styles.title}>Bem-vindo!!!</Text>
            <Text style={styles.description}>Escolhe um caso abaixo e salve o dia.</Text>
            <FlatList
                data={incidents} /* Quando de itens(cards) renderizados*/
                style={styles.incidentList}
                keyExtractor={ incident => String(incident.id)}
                /* showsVerticalScrollIndicator={false}  Retira o Scroll vertical */
                onEndReached={loadIncidents} /* Carrega a nova Page */
                onEndReachedThreshold={0.2} /* 20% do fim da página carrega nos dados da página seguinte */
                renderItem={({ item: incident }) => ( /* Destruturação de Item para acessar as variáveis dentro de cada Incident na Api, no caso Item passa ser reconhecido como Incident */
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                        
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
                        
                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {
                                 style: 'currency', 
                                 currency: 'BRL' })
                            .format(incident.value)}
                        </Text>
                        
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigationToDetail(incident)}>  
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={24} color="#e02041" />
                        </TouchableOpacity> 
                    </View>
                )}
            />
        </View>
    );
}