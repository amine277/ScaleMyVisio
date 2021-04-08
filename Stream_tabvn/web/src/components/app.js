import React from 'react'
import styled from 'styled-components'
import {borderColor, headerHeight, containerMaxWidth} from "./theme";
import Watch from './pages/watch'
import VideoPlayer from './pages/VideoPlayer'
import {Route, Switch} from 'react-router-dom'
import Store from "../store";

import _ from 'lodash'

const AppWrapper = styled.div `
   
`;

const Container = styled.div `
    max-width: ${containerMaxWidth}px;
    margin: 0 auto;
`
const Header = styled.div `
      
        height: ${headerHeight}px;
        border-bottom: 1px solid ${borderColor};
`

const Main = styled.div `
    padding: 20px 0;
    
`

const Footer = styled.div `
    border-top: 1px solid ${borderColor};
    padding: 10px 0;
`
const Copyright = styled.p`
    font-size: 12px;
    text-align: center;
`
/*const HeaderTitle = styled.div `
    font-size: 35px;
    font-weight: 800;
    line-height: ${headerHeight}px;
    flex-grow: 1;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
`
const HeaderUserMenu = styled.div `
    width: 50px;
    display: flex;
    align-items: center;
`
const HeaderWrapper = styled.div `
    display: flex;
    
`
const HeaderUserAvatar = styled.img `
    border-radius: 50%;
    width: 30px;
    height: 30px;
`

const UserTitle = styled.div `
    font-size: 14px;
    font-weight: 600;
    line-height: ${headerHeight}px;
    padding-right: 10px;
`*/
export default class App extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            store: new Store(this)
        }
    }
    state = {
        videoUrl: ""
      };
    
      componentDidMount() {
        this.getVideoUrl();
      }
    
      // Get VideoUrl
      getVideoUrl = async () => {
        let videoUrl =
        "http://localhost:3002/live/tabvn/index.m3u8";
    
        this.setState({ videoUrl });
      };
    render() {

        const {store} = this.state;
        const { videoUrl } = this.state;
        //const currentUser = store.getCurrentUser();




        return <AppWrapper>
            <Header>
                {/*<HeaderWrapper>
                    <HeaderTitle>ScaleMyVisio</HeaderTitle>
                    {currentUser ? <UserTitle>{_.get(currentUser, 'name', '')}</UserTitle> : null}
                    <HeaderUserMenu>

                        <HeaderUserAvatar alt="" src={userAvatar}/>
                    </HeaderUserMenu>
                </HeaderWrapper>*/}
            </Header>
            <Main>
                <Container>
                   {/* <Switch>
                        <Route exact path={'/dashboard/camera/add'} render={(routeProps) => <AddCamera {...routeProps} store={store}/>}/>
                        <Route exact path={'/dashboard/camera'} render={(routeProps) => <UserCamera {...routeProps} store={store}/>}/>
                        <Route exact path={'/login'} render={(routeProps) => <Login {...routeProps} store={store}/>}/>
                        <Route exact path={'/register'}
                               render={(routeProps) => <Register {...routeProps} store={store}/>}/>
                        <Route exact path={'/watch/:id'}
                               render={(routeProps) => <Watch {...routeProps} store={store}/>}/>
                        <Route exact path={'/'} render={(routeProps) => <Home {...routeProps} store={store}/>}/>
                   </Switch>*/}
                   <Switch>
                        
                        <Route exact path={'/watch/:id'}
                               render={(routeProps) => <Watch {...routeProps} />}/>
                        <Route exact path={'/'} render={(routeProps) => <VideoPlayer  src={videoUrl} {...routeProps} store={store}/>}/>
                   </Switch>
                  {/*<VideoPlayer src={videoUrl} />;*/}  
                </Container>
            </Main>
            <Footer>
                <Container>
                    <Copyright>Camera.</Copyright>
                </Container>
            </Footer>
        </AppWrapper>
    }

}