import React, { useEffect, useState} from 'react'
import { View, FlatList } from 'react-native'

import { Post, Header, Avatar, Name, PostImage, Description } from '../estilos/style-feed'

export default function Noticias(){

    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

   /* async function loadPage(pageNumber = page){
        if (total && pageNumber > total) return;

        const response = await fetch(
            `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
        );
        const data = await response.json();
        const totalItens = await response.headers.get('X-Total-Count');

        setTotal(Math.floor(totalItens/5));
        setFeed([ ...feed, ...data]);
        setPage(pageNumber + 1);
    }

    useEffect(() =>{
        loadPage();
    }, []);
*/
    return(
        <View>
          {/* <FlatList
                data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                renderItem={({item}) => (
                    <Post>
                        <Header>
                            <Avatar source={require('../../assets/book-50.png')}/>
                            <Name>Escola Terezinha Souza:</Name>
                        </Header>

                        <PostImage ratio={item.aspectRatio} source={{ uri: item.image}}/>

                        <Description>
                            {item.description}
                        </Description>

                    </Post>
                )}
            />*/}
        </View>
    );
}