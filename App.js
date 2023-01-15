import React,{Component} from "react";
import {View,BackHandler,Platform} from 'react-native';
import WebView from "react-native-webview";


export default class App extends Component {
  constructor(props){
    super(props);
  }
  WebView ={
    canGoBack:false,
    ref:null
  }
  onAndroidBackPress =()=>{
    if(this.WebView.canGoBack && this.WebView.ref){
      this.WebView.ref.goBack();
      return true;
    }
    return false;
  }
  componentDidMount(){
    if(Platform.OS === "android"){
      BackHandler.addEventListener('hardwareBackPress',this.onAndroidBackPress);
    }
  }
  componentWillUnmount(){
    if(Platform.OS === "android"){
      BackHandler.removeEventListener('hardwareBackPress',this.onAndroidBackPress);
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <WebView
          ref={ref => this.WebView.ref = ref}
          onNavigationStateChange={navState => this.WebView.canGoBack = navState.canGoBack}
          source={{uri: 'https://unifyme.azurewebsites.net/'}}
          style={{marginTop: 25}}
        />
      </View>
    );
  }
}