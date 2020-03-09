import React from 'react'
import { SafeAreaView} from 'react-native'
import MoviesAndTV from '../moviesAndTv/moviesAndTv'
import { Header } from '../../components/header'
import { MyContextProvider } from '../../utils/context'

export default class Home extends React.Component {

    state = {
        type: 'movie'
    }

    _movieTvRef = null

    render() {
        return (
            <SafeAreaView style={[{flex: 1}]}>
                <MyContextProvider value={{navigation: this.props.navigation, type: this.state.type}}>
                    <Header changeType={this.changeType} />
                    <MoviesAndTV ref={(c) => this._movieTvRef = c} type={this.state.type} />
                </MyContextProvider>
            </SafeAreaView>
        ) 
    }

    changeType = (type) => {
        this.setState({ type }, () => {
            this._movieTvRef.componentDidMount()
        })
    }
}