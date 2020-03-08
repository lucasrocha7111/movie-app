import React from 'react'
import {
    FlatList,
    Image,
    View,
    Text,
    Dimensions
} from 'react-native'
import { IMAGE_PATH_ORIGINAL } from '../utils/constants'
const WIDTH = Dimensions.get('screen').width

export class VideoBanner extends React.Component {

    render() {
        return (
            <View>
                <Text style={[{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }]}>Trends</Text>
                <FlatList 
                    horizontal
                    data={this.props?.data}
                    renderItem={this.renderItem}
                />
            </View>
            
        )
    }

    renderItem = ({ item }) => {
        // TODO fix style
        return <View style={[{ width: WIDTH - 40, maxHeight: 210, marginHorizontal: 20, marginBottom: 10, flexDirection: 'row', elevation: 2, shadowColor: "#000",
            shadowOffset: {
                width: 4,
                height: 4,
            },
            shadowOpacity: 0.20,
            shadowRadius: 7.41, }]}> 
            <Image source={{uri: `${IMAGE_PATH_ORIGINAL}/${item?.backdrop_path}`}} style={[{ width: WIDTH - 40, height: 210, backgroundColor: 'gray', backgroundColor: 'gray', marginRight: 10, resizeMode: 'stretch' }]} />
        </View>
    }
}