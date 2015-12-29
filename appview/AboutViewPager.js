'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ViewPagerAndroid,
} = React;

var PAGES = 4;
var BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe'];
var TEXT = ['首页', 'Two', 'Three', 'Four'];
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var ViewPagerAndroidExample = React.createClass({
  getInitialState: function() {
    return {
      page: 0,
      animationsAreEnabled: true,
      progress: {
        position: 0,
        offset: 0,
      },
    };
  },

  onPageSelected: function(e) {
    this.setState({page: e.nativeEvent.position});
  },

  onPageScroll: function(e) {
    this.setState({progress: e.nativeEvent});
  },

  move: function(delta) {
    var page = this.state.page + delta;
    this.go(page);
  },

  go: function(page) {
    if (this.state.animationsAreEnabled) {
      this.viewPager.setPage(page);
    } else {
      this.viewPager.setPageWithoutAnimation(page);
    }
    this.setState({page});
  },

  render: function() {
    var pages = [];
    for (var i = 0; i < PAGES; i++) {
      var pageStyle = {
        backgroundColor: BGCOLOR[i % BGCOLOR.length],
        alignItems: 'center',
        padding: 20,
      };
      pages.push(
        <View key={i} style={pageStyle} collapsable={false}>
        </View>
      );
    }
    var { page, animationsAreEnabled } = this.state;
    return (
      <View style={styles.container}> 
      	<View style = { styles.title }>
      		<Image source = { require('./imgs/pre.png')} style = { styles.titleBackimg } />
      		<Text style = { styles.titleBackText }>返回</Text>
      		<View style = { styles.titleCenter }>
      			<Text style = { styles.titleCenterText }>{
      				page==0 ? TEXT[0]:page == 1 ? TEXT[1] : page == 2 ? TEXT[2] : TEXT [3]
      			}</Text>
      		</View>
      		<View style = {{ flex:2 }}/>
      	</View>
      	<View style = { styles.vpContainer }>
	        <ViewPagerAndroid
	          style={styles.viewPager}
	          initialPage={0}
	          onPageScroll={this.onPageScroll}
	          onPageSelected={this.onPageSelected}
	          ref={viewPager => { this.viewPager = viewPager; }}>
	          {pages}
	        </ViewPagerAndroid>
        </View>
        <View style = { [styles.dotView1,{ opacity : page == 0 ? 1 : 0.4 }] } />
 				<View style = { [styles.dotView2 , { opacity : page == 1 ? 1 : 0.4 }] }/>
 				<View style = { [styles.dotView3, { opacity : page == 2 ? 1 : 0.4 }] } />
 				<View style = { [styles.dotView4, { opacity : page == 3 ? 1 : 0.4 }] } />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  vpContainer: {
 		flex: 9,
  },
  viewPager: {
    flex: 1,
  },
  title: {
  	flex: 1,
  	flexDirection : 'row',
  	alignItems: 'center',
  },
  dotView1: {
		position : 'absolute' , 
		width : deviceWidth/20 , 
		height : deviceWidth/20, 
		borderRadius: deviceWidth/40,
		top : deviceHeight-deviceHeight/8, 
		right : deviceWidth / 2 + 1.5*deviceWidth/10 ,
		backgroundColor : 'black' ,
		opacity : 0.4 ,
		flexDirection : 'column',
  }, 
  dotView2: {
		position : 'absolute' , 
		width : deviceWidth/20 , 
		height : deviceWidth/20, 
		top : deviceHeight-deviceHeight/8 ,
		right : deviceWidth / 2 + 0.5*deviceWidth/10 ,
		backgroundColor : 'black' ,
		borderRadius: deviceWidth/40,
		opacity : 0.4 ,
		flexDirection : 'column',
  }, 
  dotView3: {
		position : 'absolute' , 
		width : deviceWidth/20 , 
		height : deviceWidth/20, 
		top : deviceHeight-deviceHeight/8, 
		right : deviceWidth / 2 - 0.5*deviceWidth/10 ,
		backgroundColor : 'black' ,
		borderRadius: deviceWidth/40,
		opacity : 0.4 ,
		flexDirection : 'column',
  }, 
  dotView4: {
		position : 'absolute' , 
		width : deviceWidth/20 , 
		height : deviceWidth/20, 
		borderRadius: deviceWidth/40,
		top : deviceHeight-deviceHeight/8, 
		right : deviceWidth / 2 - 1.5*deviceWidth/10 ,
		opacity : 0.4 ,
		backgroundColor : 'black' ,
		flexDirection : 'column',
  },
  dotImg : {
  	flex : 1 ,
  },
  titleBackimg : {
  	flex:1,
  	height: 70,
  	width: 0,
  	resizeMode : 'contain',
  },
  titleBackText : {
  	flex:1,
  	height: 70,
  	width: 0,
  	fontSize : 40,
  	marginTop : 10,
  	textAlign: 'center',
  },
  titleCenter : {
  	flex: 5,
  	height:70,
  	width: 0 ,
  	alignItems: 'center',
  },
  titleCenterText :{
  	fontSize : 50,
  	textAlign: 'center',
  },
});

module.exports = ViewPagerAndroidExample;

