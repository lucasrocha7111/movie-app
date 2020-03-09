import React from 'react'
import {
    FlatList,
    Image,
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native'
import { IMAGE_PATH } from '../utils/constants'
const WIDTH = Dimensions.get('screen').width

export class VideoBanner extends React.Component {

    render() {
        return (
            <View>
                <Text style={[{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }]}>Trends</Text>
                <FlatList 
                    keyExtractor={(item, index) => `${index}`}
                    horizontal
                    data={this.props?.data}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

    renderItem = ({ item }, index) => {
        return <View key={`${index}`} style={[Style.item, Style.shadow]}> 
            <Image source={{uri: `${IMAGE_PATH}/${item?.backdrop_path}`}} style={[Style.image]} />
        </View>
    }
}

const Style = StyleSheet.create({
    item: {
        width: WIDTH - 40, 
        maxHeight: 210, 
        marginHorizontal: 20, 
        marginBottom: 10, 
    },
    shadow: {
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 7.41,
    },
    image: {
        width: WIDTH - 40, 
        height: 210, 
        backgroundColor: 'gray', 
        marginRight: 10
    }
})