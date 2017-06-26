/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';

//
var share = require('./shareData.json');
var jiugonggeDemo = React.createClass({
getDefaultProps(){
  return{

  }
},
  // 设置初始值
  getInitialState(){
    // 1.1 设置数据源
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // 1.2 设置返回数据
    return{
      dataSource: ds.cloneWithRows(share.data)  // cloneWithRows 放置数组
    }
  },

  render(){
  return(

        <ListView dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
                  contentContainerStyle={styles.listViewStyle}
                  removeClippedSubviews={}
                  />



  );
  },

  renderRow(data){
    return(
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={{uri: data.icon}}  style={{width:80,height:80}} />
          <Text>{data.title}</Text>
        </TouchableOpacity>


    );

  },
});



const styles = StyleSheet.create({

  listViewStyle:{
    //改变主轴的方法
    flexDirection: 'row',
    //
  flexWrap:'wrap',


  },

});

AppRegistry.registerComponent('jiugonggeDemo', () => jiugonggeDemo);
