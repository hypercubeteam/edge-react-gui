import React, { Component } from 'react'
import { View, Text, StyleSheet }  from 'react-native'
import { connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'
import { Container, Content, StyleProvider } from 'native-base'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'

import SideMenu from './SideMenu/SideMenu.ui'
import Header from './Header/Header.ui'
import TabBar from './TabBar/TabBar.ui'
import Transactions from './Transactions/Transactions.ui'
import Directory from './Directory/Directory.ui'

const RouterWithRedux = connect()(Router)

class Main extends Component {

  render () {
    return (
      <SideMenu>
        <StyleProvider style={getTheme(platform)}>
          <Container>
            <Header />
            <Content>
              <RouterWithRedux>
                <Scene key='root' hideNavBar>
                  <Scene key='transactions' component={Transactions} title='Transactions' duration={0} initial />
                  <Scene key='directory' component={Directory} title='Directory' duration={0}/>
                </Scene>
              </RouterWithRedux>
            </Content>
            <TabBar />
          </Container>
        </StyleProvider>
      </SideMenu>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },

  main: {
    flex: 1
  }

})

export default connect()(Main)
