import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { MyContextConsumer } from '../utils/context'

const OPTIONS = [{title: 'Movie', type: 'movie'}, {title: 'TV', type: 'tv'}]
const LOGO_IMG = require('../../assets/img/netflix_logo.png')

export class Header extends React.Component {

    static contextType = MyContextConsumer

    render() {
        let contextValue = this.context
        return (
            <View style={{ paddingBottom: 10 }}>
                <View style={[{ alignItems: 'center' }]}>
                    <Image source={LOGO_IMG} style={[{ width: 80, height: 60, resizeMode: 'contain' }]} />
                </View>
                <View style={[{ flexDirection: 'row', justifyContent: 'center' }]}>
                    {OPTIONS.map((data) => (
                        <TouchableOpacity  onPress={() => {
                            this.props?.changeType(data.type)
                        }}>
                            <Text style={[{ fontSize: 14, marginHorizontal: 10, fontWeight: 'bold', color: contextValue?.type === data.type ? 'red' : 'black' }]}>{data.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        )
    }
}